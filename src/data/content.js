import { Hammer, PaintRoller, Thermometer, Ruler, BrickWall, Home, Zap, Droplet, Palette, Layers } from 'lucide-react';

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
        subtitle: "SAS fondée en 2016. Spécialiste en maçonnerie générale et gros œuvre. Une expertise reconnue depuis près de 35 ans.",
        cta: "Demander un devis gratuit",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    },
    about: {
        title: "Notre Histoire",
        subtitle: "Une entreprise au service de vos projets avec 35 ans d'expérience",
        description: "Fondée le 29 mai 2016, la société TOILE DE MAITRE bénéficie d'un savoir-faire transmis depuis 35 ans. Structure à taille humaine (SAS), nous privilégions la qualité et la relation client.\n\nSpécialisée dans la maçonnerie générale et le gros œuvre, notre entreprise a su évoluer pour accompagner ses clients dans tous leurs projets de rénovation, avec le souci du détail qui caractérise les véritables artisans.",
        stats: [
            { value: "35", label: "Ans d'expérience" },
            { value: "1000+", label: "Projets réalisés" },
            { value: "100%", label: "Satisfaction" },
        ],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
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
        {
            title: "Électricité",
            description: "Installation, mise aux normes et dépannage électrique.",
            icon: Zap,
        },
        {
            title: "Plomberie",
            description: "Installation sanitaire, tuyauterie et réparation de fuites.",
            icon: Droplet,
        },
        {
            title: "Décoration",
            description: "Conseil en décoration et finitions soignées pour sublimer votre intérieur.",
            icon: Palette,
        },
        {
            title: "Béton Serré",
            description: "Sol et murs en béton serré pour un rendu moderne et industriel.",
            icon: Layers,
        },
    ],
    portfolio: [
        {
            title: "Rénovation Complète",
            category: "Rénovation",
            images: [
                "/projects/GP-1/WhatsApp Image 2025-12-02 at 22.45.44.jpeg",
                "/projects/GP-1/WhatsApp Image 2025-12-02 at 22.45.44 (1).jpeg",
                "/projects/GP-1/WhatsApp Image 2025-12-02 at 22.45.44 (2).jpeg",
                "/projects/GP-1/WhatsApp Image 2025-12-02 at 22.45.44 (3).jpeg",
            ],
        },
        {
            title: "Salle de Bain & Salon",
            category: "Plomberie",
            images: [
                "/projects/GP-2/WhatsApp Image 2025-12-02 at 22.49.24.jpeg",
                "/projects/GP-2/WhatsApp Image 2025-12-02 at 22.49.24 (1).jpeg",
                "/projects/GP-2/WhatsApp Image 2025-12-02 at 22.49.24 (2).jpeg",
                "/projects/GP-2/WhatsApp Image 2025-12-02 at 22.49.24 (3).jpeg",
            ],
        },
        {
            title: "AVANT & APRES - RENOVATION",
            category: "Aménagement",
            images: [
                "/projects/GP-3/WhatsApp Image 2025-12-02 at 22.51.50.jpeg",
                "/projects/GP-3/WhatsApp Image 2025-12-02 at 22.51.50 (1).jpeg",
            ],
        },
        {
            title: "Rénovation & Agencement",
            category: "Construction",
            images: [
                "/projects/GP-4/WhatsApp Image 2025-12-02 at 23.13.10.jpeg",
                "/projects/GP-4/WhatsApp Image 2025-12-02 at 23.13.10 (1).jpeg",
                "/projects/GP-4/WhatsApp Image 2025-12-02 at 23.13.11.jpeg",
                "/projects/GP-4/WhatsApp Image 2025-12-02 at 23.13.11 (1).jpeg",
                "/projects/GP-4/WhatsApp Image 2025-12-02 at 23.13.12.jpeg",
                "/projects/GP-4/WhatsApp Image 2025-12-02 at 23.13.12 (1).jpeg",
                "/projects/GP-4/WhatsApp Image 2025-12-02 at 23.13.12 (2).jpeg",
            ],
        },
        {
            title: "Rénovation & Création de vérrières",
            category: "Extérieur",
            images: [
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.14.13.jpeg",
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.14.13 (1).jpeg",
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.14.13 (2).jpeg",
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.14.13 (3).jpeg",
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.14.13 (4).jpeg",
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.15.00.jpeg",
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.15.00 (1).jpeg",
                "/projects/GP-5/WhatsApp Image 2025-12-02 at 23.15.00 (2).jpeg",
            ],
        },
        {
            title: "Projet 6",
            category: "Rénovation",
            images: [
                "/projects/GP-6/WhatsApp Image 2025-12-02 at 23.21.18.jpeg",
                "/projects/GP-6/WhatsApp Image 2025-12-02 at 23.21.18 (1).jpeg",
                "/projects/GP-6/WhatsApp Image 2025-12-02 at 23.21.18 (2).jpeg",
                "/projects/GP-6/WhatsApp Image 2025-12-02 at 23.21.18 (3).jpeg",
                "/projects/GP-6/WhatsApp Image 2025-12-02 at 23.21.18 (4).jpeg",
            ],
        },
        {
            title: "Projet 7",
            category: "Construction",
            images: [
                "/projects/GP-7/WhatsApp Image 2025-12-02 at 23.23.02.jpeg",
                "/projects/GP-7/WhatsApp Image 2025-12-02 at 23.23.03.jpeg",
                "/projects/GP-7/WhatsApp Image 2025-12-02 at 23.23.03 (1).jpeg",
            ],
        },
        {
            title: "Projet 8",
            category: "Aménagement",
            images: [
                "/projects/GP-8/WhatsApp Image 2025-12-02 at 23.27.12.jpeg",
                "/projects/GP-8/WhatsApp Image 2025-12-02 at 23.27.13.jpeg",
                "/projects/GP-8/WhatsApp Image 2025-12-02 at 23.27.13 (1).jpeg",
                "/projects/GP-8/WhatsApp Image 2025-12-02 at 23.27.13 (2).jpeg",
            ],
        },
        {
            title: "Projet 9",
            category: "Extérieur",
            images: [
                "/projects/GP-9/WhatsApp Image 2025-12-02 at 23.35.10.jpeg",
                "/projects/GP-9/WhatsApp Image 2025-12-02 at 23.35.10 (1).jpeg",
                "/projects/GP-9/WhatsApp Image 2025-12-02 at 23.35.10 (2).jpeg",
                "/projects/GP-9/WhatsApp Image 2025-12-02 at 23.35.10 (3).jpeg",
                "/projects/GP-9/WhatsApp Image 2025-12-02 at 23.35.10 (4).jpeg",
            ],
        },
    ],
    contact: {
        title: "Parlons de votre projet",
        email: "toiledemaitre@sfr.fr",
        phone: "06 24 03 06 48",
        address: "3 Avenue Flouquet, 94240 L'Haÿ-les-Roses",
    },
    footer: {
        copyright: "© 2024 SAS Toile de Maître. Tous droits réservés.",
    },
};
