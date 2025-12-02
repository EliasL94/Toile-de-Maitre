import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Découvrez quelques-uns de nos projets récents, témoins de notre savoir-faire et de notre engagement qualité.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.portfolio.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 font-medium text-sm mb-2">{project.category}</span>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
