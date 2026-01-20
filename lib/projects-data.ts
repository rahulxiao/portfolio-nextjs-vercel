export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    images?: string[];
    category: string;
    technologies: string[];
    github?: string;
    link?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "FinanceFlow - Personal Finance Tracker",
        description: "A PHP-based personal finance management web app that helps users track income, expenses, and savings. It includes categorized transaction tracking, detailed financial summaries, and a clean, responsive interface for easy budget monitoring.",
        image: "/image/financeFlow.png",
        images: ["/image/financeFlow.png"],
        category: "Web",
        technologies: ["PHP", "CSS", "JavaScript", "HTML"],
        github: "https://github.com/rahulxiao/Personal-Finance-Tracker",
        link: ""
    },
    {
        id: "2",
        title: "ThePassword",
        description: "A secure and lightweight web-based password manager built with vanilla JavaScript. It allows users to generate, store, and manage passwords locally in the browser with an intuitive and responsive UI.",
        image: "/image/password.png",
        images: ["/image/password.png"],
        category: "Web",
        technologies: ["JavaScript", "CSS", "HTML"],
        github: "https://github.com/rahulxiao/ThePassword",
        link: "https://rahulxiao.github.io/ThePassword/"
    },
    {
        id: "3",
        title: "EasyTravel",
        description: "A Java-based desktop travel management application that simplifies trip booking, payment tracking, and itinerary planning. Designed for seamless travel organization with a user-friendly interface and efficient data management.",
        image: "/image/easytravel.png",
        images: ["/image/easytravel.png"],
        category: "Software",
        technologies: ["Java"],
        github: "https://github.com/rahulxiao/EasyTravel",
        link: "https://www.youtube.com/watch?v=lpn4AoI7GbQ"
    },
    {
        id: "4",
        title: "Arcade3in1",
        description: "A C++ and OpenGL-powered 3-in-1 arcade game bundle featuring Pac-Man, Breakout, and Xiao Agent. It showcases classic arcade mechanics, smooth graphics rendering, and keyboard-based controls — built for nostalgic gameplay fun.",
        image: "/image/arc1.png",
        images: ["/image/arc1.png", "/image/arc2.png", "/image/arc3.png"],
        category: "Game",
        technologies: ["C++", "OpenGL", "GLUT"],
        github: "https://github.com/rahulxiao/arcade3in1",
        link: "https://www.youtube.com/watch?v=Hm6lYBFJf2Q"
    },
    {
        id: "5",
        title: "GreenGuestBD",
        description: "GreenGuestBD is an elegant e-commerce website focused on bonsai plants and gardening accessories. It allows users to browse, purchase, and manage their bonsai collections with a smooth shopping experience.",
        image: "/image/greenguest.png",
        images: ["/image/greenguest.png"],
        category: "Web",
        technologies: ["Typescript", "Tailwind CSS", "Postgress", "Next js", "Nest Js"],
        github: "",
        link: "https://greenguestbd.com/"
    },
    {
        id: "6",
        title: "SaaS Portfolio & E-commerce Platform",
        description: "A full-stack SaaS platform that empowers users to build professional portfolios and online stores. Features a dynamic theme marketplace, real-time site previews, and intuitive dashboards for content and product management.",
        image: "/image/saas1.png",
        images: ["/image/saas1.png"],
        category: "Full-Stack",
        technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "React", "Tailwind CSS"],
        github: "https://github.com/rahulxiao/Full-SaaS-project"
    },
    {
        id: "7",
        title: "2048 Mobile",
        description: "A production-ready 2048 puzzle game built with Expo and React Native, featuring Firebase authentication, in-app purchases, AdMob ads, and daily notifications. Designed for responsive gameplay and clean modular architecture.",
        image: "/image/20801.jpg",
        images: ["/image/20801.jpg", "/image/20802.jpg"],
        category: "Mobile",
        technologies: ["React Native", "Expo", "Firebase", "AdMob", "In-App Purchases", "Expo Notifications"],
        github: ""
    },
    {
        id: "8",
        title: "Useful Calendar",
        description: "A modern full-stack calendar app with an integrated AI assistant. Built with Next.js 15 for the frontend and NestJS + TypeORM for the backend, it supports smart event parsing, task management, and personalized settings.",
        image: "/image/Callender1.png",
        images: ["/image/Callender1.png", "/image/callender2.png", "/image/Calender3.png"],
        category: "Full-Stack",
        technologies: ["Next.js 15", "NestJS", "TypeORM", "PostgreSQL", "OpenRouter API", "React", "Tailwind CSS"],
        github: ""
    },
    {
        id: "9",
        title: "Cloth Sales Tracking",
        description: "A comprehensive web-based sales management system built with PHP MVC architecture. Enables users to track daily sales, manage expenses, and generate monthly analytical reports with secure role-based access control.",
        image: "/image/clothMng.png",
        images: ["/image/clothMng.png"],
        category: "Web",
        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
        github: "https://github.com/rahulxiao/Cloth-Sales-Tracking-System"
    },
    {
        id: "10",
        title: "MoneyTray",
        description: "A Flutter-based personal finance management app that helps users track expenses, manage budgets, set savings goals, and plan trips with detailed analytics and export options.",
        image: "/image/moneytra1.jpg",
        images: ["/image/moneytra1.jpg", "/image/moneytra2.jpg", "/image/moneytra3.jpg"],
        category: "Mobile",
        technologies: ["Flutter", "Dart", "Hive", "PDF Export", "CSV Import/Export"],
        github: ""
    },
    {
        id: "11",
        title: "Nite Feeder",
        description: "A high-octane 3D racing game built with Unreal Engine 5, featuring realistic physics, dynamic lighting, and immersive environments. Players can compete across multiple tracks, use nitro boosts, and experience smooth, cinematic gameplay powered by UE5’s advanced rendering and physics systems.",
        image: "/image/netro2.png",
        images: ["/image/Nitro.png"],
        category: "Game",
        technologies: ["Unreal Engine 5", "Blueprints", "C++", "Niagara", "Lumen"],
        github: "",
        link: ""
    },
];
