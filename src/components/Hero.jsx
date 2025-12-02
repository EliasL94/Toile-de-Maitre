import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={content.hero.image}
                    alt="Rénovation Intérieur"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    {content.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
                >
                    {content.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                        {content.hero.cta}
                        <ArrowRight className="ml-2" size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
