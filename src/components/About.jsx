import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-br-3xl -z-10"></div>
                            <img
                                src={content.about.image}
                                alt="Notre équipe au travail"
                                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.about.title}</h2>
                        <h3 className="text-xl text-blue-600 font-medium mb-6">{content.about.subtitle}</h3>

                        <p className="text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                            {content.about.description}
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                            {content.about.stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
