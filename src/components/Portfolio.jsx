import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { content } from '../data/content';

const Portfolio = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600">Faites défiler pour découvrir nos projets.</p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 -mx-6 px-6 space-x-6 scrollbar-hide snap-x snap-mandatory">
                    {content.portfolio.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-container-${index}`}
                            onClick={() => setSelectedId(index)}
                            className="min-w-[300px] md:min-w-[400px] snap-center cursor-pointer relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <motion.img
                                    layoutId={`card-image-${index}`}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 font-medium text-sm mb-1">{project.category}</span>
                                <h3 className="text-white text-xl font-bold flex items-center justify-between">
                                    {project.title}
                                    <ZoomIn size={20} className="text-white/80" />
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox (Zoom) */}
                <AnimatePresence>
                    {selectedId !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="relative max-w-5xl w-full bg-transparent rounded-xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <motion.img
                                    layoutId={`card-image-${selectedId}`}
                                    src={content.portfolio[selectedId].image}
                                    alt={content.portfolio[selectedId].title}
                                    className="w-full max-h-[80vh] object-contain rounded-lg"
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white p-6 mt-4 rounded-lg shadow-lg"
                                >
                                    <span className="text-blue-600 font-medium text-sm">{content.portfolio[selectedId].category}</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{content.portfolio[selectedId].title}</h3>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
