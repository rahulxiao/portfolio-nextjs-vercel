import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment integration and admin dashboard.",
            tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            github: "https://github.com/rahulxiao",
            demo: "https://example.com",
            image: "/image/allimage.png",
        },
        {
            title: "Task Management App",
            description: "A collaborative tool for teams to manage projects and track time.",
            tags: ["React", "Node.js", "Socket.io", "MongoDB"],
            github: "https://github.com",
            demo: "https://example.com",
            image: "/image/allimage.png",
        },
        {
            title: "Portfolio Website",
            description: "A stunning portfolio template for developers and creative professionals.",
            tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
            github: "https://github.com",
            demo: "https://example.com",
            image: "/image/allimage.png",
        },
    ];

    return (
        <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Some of my best work that demonstrates my skills and problem-solving abilities."
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <GlassCard key={project.title} className="group p-0 overflow-hidden flex flex-col h-full">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            <div className="flex flex-col flex-grow p-6">
                                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                                    {project.description}
                                </p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs bg-zinc-100/50 dark:bg-zinc-800/50">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="mt-auto flex items-center gap-3">
                                    <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <GithubIcon className="h-4 w-4" /> Github
                                        </a>
                                    </Button>
                                    <Button size="sm" className="flex-1 gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white" asChild>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLinkIcon className="h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
