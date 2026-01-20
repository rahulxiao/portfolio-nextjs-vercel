import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeaturedProjects() {
    const featuredProjects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment integration and admin dashboard.",
            tags: ["Next.js", "TypeScript", "Stripe"],
            github: "https://github.com/rahulxiao",
            demo: "https://example.com",
            image: "/image/allimage.png",
        },
        {
            title: "Task Management App",
            description: "A collaborative tool for teams to manage projects and track time.",
            tags: ["React", "Node.js", "Socket.io"],
            github: "https://github.com",
            demo: "https://example.com",
            image: "/image/allimage.png",
        },
    ];

    return (
        <section id="featured-projects" className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end mb-12">
                    <div className="text-center md:text-left">
                        <SectionHeading
                            title="Featured Work"
                            subtitle="A small selection of my recent projects. Each one is crafted with care and precision."
                            className="items-start text-left mb-0"
                        />
                    </div>
                    <Link href="/projects">
                        <Button variant="ghost" className="group gap-2 hover:bg-purple-600/10 hover:text-purple-600 dark:hover:text-purple-400">
                            View All Projects <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {featuredProjects.map((project, index) => (
                        <GlassCard key={project.title} className="group p-0 overflow-hidden flex flex-col md:flex-row h-full">
                            <div className="relative aspect-video w-full md:aspect-auto md:w-2/5 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:hidden" />
                            </div>

                            <div className="flex flex-col flex-grow p-8 md:w-3/5">
                                <div className="mb-4 flex flex-wrap gap-2 text-xs">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="bg-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-500/20">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="mb-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-auto flex items-center gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <GithubIcon className="h-5 w-5" />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <ExternalLinkIcon className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
