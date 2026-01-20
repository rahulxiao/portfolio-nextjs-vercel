import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/projects-data";

export function FeaturedProjects() {
    // Select specific projects to feature (SaaS and Useful Calendar)
    const featuredProjects = projects.filter(p => ["5", "6"].includes(p.id));

    return (
        <section id="featured-projects" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/4 right-[-10%] h-[500px] w-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end mb-12">
                    <div className="text-center md:text-left">
                        <SectionHeading
                            title="Featured Work"
                            subtitle="A showcase of my most complex engineering projects, built with modern tech stacks and production-grade architecture."
                            className="items-start text-left mb-0"
                            gradient="purple-pink-blue"
                        />
                    </div>
                    <Link href="/projects">
                        <Button variant="ghost" className="group gap-2 hover:bg-purple-600/10 hover:text-purple-600 dark:hover:text-purple-400 font-bold transition-all">
                            View All Projects <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <GlassCard key={project.id} className="group p-0 overflow-hidden flex flex-col md:flex-row h-full border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                            <Link href={`/projects/${project.id}`} className="relative aspect-video w-full md:aspect-auto md:w-2/5 overflow-hidden block">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                            </Link>

                            <div className="flex flex-col flex-grow p-8 md:w-3/5">
                                <Link href={`/projects/${project.id}`} className="block group/link">
                                    <div className="mb-4 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-wider">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <Badge key={tech} variant="outline" className="bg-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-500/20 px-2 py-0">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </Link>
                                <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {project.github && project.github !== "" && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                                <GithubIcon className="h-5 w-5" />
                                            </a>
                                        )}
                                        {project.link && project.link !== "" && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                                <ExternalLinkIcon className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                    <Link href={`/projects/${project.id}`} className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 flex items-center gap-1 group/more transition-all">
                                        Case Study <ArrowRightIcon className="h-3 w-3 transition-transform group-hover/more:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
