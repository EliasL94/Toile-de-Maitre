import { Hammer, PaintRoller, Thermometer, Ruler, BrickWall, Home } from 'lucide-react';

export const content = {
    header: {
        logo: "Toile de Maître",
        logoIcon: PaintRoller,
        nav: [
            { label: "Accueil", href: "#home" },
            { label: "À Propos", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Réalisations", href: "#portfolio" },
            { label: "Contact", href: "#contact" },
        ],
    },
    hero: {
        title: "Construisons votre avenir, pierre par pierre",
        subtitle: "SAS fondée en 2016. Spécialiste en maçonnerie générale et gros œuvre. Une expertise reconnue depuis près de 10 ans.",
        cta: "Demander un devis gratuit",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    },
    about: {
        title: "Notre Histoire",
        subtitle: "Une entreprise familiale au service de vos projets depuis 2016",
        description: "Fondée le 29 mai 2016, la société TOILE DE MAITRE est née d'une passion pour le bâtiment et le travail bien fait. Structure à taille humaine (SAS), nous privilégions la qualité et la relation client.\n\nSpécialisée dans la maçonnerie générale et le gros œuvre, notre entreprise a su évoluer pour accompagner ses clients dans tous leurs projets de rénovation, avec le souci du détail qui caractérise les véritables artisans.",
        stats: [
            { value: "10", label: "Ans d'expérience" },
            { value: "100+", label: "Projets réalisés" },
            { value: "100%", label: "Satisfaction" },
        ],
        image: "https://images.unsplash.com/photo-1581094794329-cd11965d1169?q=80&w=800&auto=format&fit=crop",
    },
    services: [
        {
            title: "Maçonnerie Générale",
            description: "Expertise en gros œuvre et construction de structures durables.",
            icon: BrickWall,
        },
        {
            title: "Rénovation",
            description: "Remise à neuf d'appartements et maisons. Rénovation intérieure et extérieure.",
            icon: PaintRoller,
        },
        {
            title: "Isolation",
            description: "Isolation thermique et phonique pour un confort optimal.",
            icon: Thermometer,
        },
        {
            title: "Aménagement",
            description: "Transformation de vos espaces, cloisons et aménagements sur mesure.",
            icon: Home,
        },
    ],
    portfolio: [
        {
            title: "Villa Moderne",
            category: "Construction",
            image: "https://images.unsplash.com/photo-1600596542815-27b88e35e696?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Rénovation Appartement",
            category: "Rénovation",
            image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Extension Maison",
            category: "Gros Œuvre",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
        },
    ],
    contact: {
        title: "Parlons de votre projet",
        email: "toiledemaitre@sfr.fr",
        phone: "06 24 43 84 79",
        address: "3 Avenue Flouquet, 94240 L'Haÿ-les-Roses",
    },
    footer: {
        copyright: "© 2024 SAS Toile de Maître. Tous droits réservés.",
    },
};
