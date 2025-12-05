import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const FloatingCallButton = () => {
    // Remove spaces from phone number for the tel: link
    const phoneNumber = content.contact.phone.replace(/\s/g, '');

    return (
        <motion.a
            href={`tel:${phoneNumber}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center group"
            aria-label="Appeler maintenant"
        >
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40"></div>
            <Phone size={28} fill="currentColor" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 text-sm font-bold">
                Appeler
            </span>
        </motion.a>
    );
};

export default FloatingCallButton;
