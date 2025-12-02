import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-gray-900 tracking-tight group">
                    <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                        {React.createElement(content.header.logoIcon, { size: 24 })}
                    </div>
                    <span>{content.header.logo}</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {content.header.nav.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {content.header.nav.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-lg font-medium text-gray-800 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
