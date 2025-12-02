import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100 group"
                            >
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
