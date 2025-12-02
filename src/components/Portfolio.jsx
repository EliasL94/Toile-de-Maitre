import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { content } from '../data/content';

const Portfolio = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openProject = (index) => {
        setSelectedProjectIndex(index);
        setCurrentImageIndex(0);
    };

    const closeProject = () => {
        setSelectedProjectIndex(null);
        setCurrentImageIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const project = content.portfolio[selectedProjectIndex];
        if (currentImageIndex < project.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0); // Loop back to start
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const project = content.portfolio[selectedProjectIndex];
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(project.images.length - 1); // Loop to end
        }
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quelques Réalisations</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600">Parmi nos centaines de chantiers, voici un aperçu de notre savoir-faire.</p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 -mx-6 px-6 space-x-6 scrollbar-hide snap-x snap-mandatory">
                    {content.portfolio.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-container-${index}`}
                            onClick={() => openProject(index)}
                            className="min-w-[300px] md:min-w-[400px] snap-center cursor-pointer relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <motion.img
                                    layoutId={`card-image-${index}`}
                                    src={project.images[0]} // Show first image as cover
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 font-medium text-sm mb-1">{project.category}</span>
                                <h3 className="text-white text-xl font-bold flex items-center justify-between">
                                    {project.title}
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs text-white/80">{project.images.length} photos</span>
                                        <ZoomIn size={20} className="text-white/80" />
                                    </div>
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox (Gallery) */}
                <AnimatePresence>
                    {selectedProjectIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                            onClick={closeProject}
                        >
                            <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center">

                                {/* Close Button */}
                                <button
                                    onClick={closeProject}
                                    className="absolute top-4 right-4 z-20 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                {/* Main Image Container */}
                                <div
                                    className="relative w-full h-[80vh] flex items-center justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Prev Button */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 md:left-4 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>

                                    <motion.img
                                        key={currentImageIndex} // Key change triggers animation
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        src={content.portfolio[selectedProjectIndex].images[currentImageIndex]}
                                        alt={`${content.portfolio[selectedProjectIndex].title} - Photo ${currentImageIndex + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                    />

                                    {/* Next Button */}
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 md:right-4 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>

                                {/* Footer Info */}
                                <div
                                    className="mt-4 text-center text-white"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h3 className="text-xl font-bold">{content.portfolio[selectedProjectIndex].title}</h3>
                                    <p className="text-sm text-gray-400 mt-1">
                                        Photo {currentImageIndex + 1} sur {content.portfolio[selectedProjectIndex].images.length}
                                    </p>
                                </div>

                                {/* Thumbnails (Optional, simple dots for now) */}
                                <div className="flex space-x-2 mt-4 overflow-x-auto max-w-full px-4 pb-2">
                                    {content.portfolio[selectedProjectIndex].images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/30 hover:bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
