import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import {
    Code2Icon,
    SmartphoneIcon,
    GlobeIcon,
    SparklesIcon,
    CpuIcon,
    RocketIcon
} from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Web Development",
            description: "Building fast, responsive, and SEO-friendly websites using the latest technologies like React and Next.js.",
            icon: GlobeIcon,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Full Stack Solutions",
            description: "End-to-end development of complex web applications with robust backends and scalable databases.",
            icon: Code2Icon,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and visually stunning user interfaces that provide exceptional user experiences.",
            icon: SparklesIcon,
            color: "text-pink-500",
            bg: "bg-pink-500/10",
        },
        {
            title: "Performance Optimization",
            description: "Optimizing your existing applications for maximum speed, accessibility, and search engine ranking.",
            icon: CpuIcon,
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
        {
            title: "Technical Consultation",
            description: "Providing expert advice on technology stacks, architecture, and development best practices.",
            icon: RocketIcon,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
        {
            title: "App Maintenance",
            description: "Ongoing support and updates to ensure your applications remain secure, up-to-date, and bug-free.",
            icon: SmartphoneIcon,
            color: "text-cyan-500",
            bg: "bg-cyan-500/10",
        },
    ];

    return (
        <section id="services" className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="What I Offer"
                    subtitle="Turning complex challenges into simple, elegant digital solutions."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <GlassCard
                            key={service.title}
                            className="group flex flex-col items-start p-8 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} ${service.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                <service.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
