import React from 'react';
import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center space-x-2 mb-2">
                            <img src="/logo.png" alt={content.header.logo} className="h-10 w-10 object-contain rounded-lg bg-white p-1" />
                            <span className="text-2xl font-bold tracking-tight">{content.header.logo}</span>
                        </div>
                        <p className="text-gray-400 text-sm">Expertise et qualité depuis plus de 20 ans.</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        {content.header.nav.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    {content.footer.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
