"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    ExternalLinkIcon,
    GithubIcon,
    FilterIcon,
    LockIcon,
    Code2Icon,
    GlobeIcon,
    SmartphoneIcon,
    Gamepad2Icon,
    ZapIcon
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/projects-data";
import Link from "next/link";

const CATEGORIES = ["All", "Web", "Full-Stack", "Mobile", "Game", "Software"];


export function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="relative py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/4 left-[-10%] h-[600px] w-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10 ">
                <div className="flex flex-col items-center justify-center mb-16">
                    <SectionHeading
                        title="Projects"
                        subtitle="A showcase of my technical projects across full-stack development, mobile applications, and game engineering."
                        gradient="purple-pink-blue"
                    />

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mt-12">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 border backdrop-blur-sm",
                                    activeCategory === category
                                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg shadow-purple-500/25 scale-105"
                                        : "bg-white/5 border-zinc-200/20 text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-white"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <GlassCard className="group p-0 overflow-hidden flex flex-col h-full border-white/10 hover:bg-white/10 dark:hover:bg-zinc-800/20 transition-all duration-500">
                                    {/* Project Image */}
                                    <Link href={`/projects/${project.id}`} className="relative aspect-video w-full overflow-hidden block">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                                        {/* Category Badge Over Image */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                                                {project.category}
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Project Content */}
                                    <div className="flex flex-col flex-grow p-8">
                                        <Link href={`/projects/${project.id}`}>
                                            <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors cursor-pointer">
                                                {project.title}
                                            </h3>
                                        </Link>
                                        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Tags */}
                                        <div className="mb-8 flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.slice(0, 4).map((tech: string) => (
                                                <span key={tech} className="px-2.5 py-1 text-[10px] font-bold tracking-tight uppercase rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="px-2.5 py-1 text-[10px] font-bold text-purple-500">
                                                    +{project.technologies.length - 4} More
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap items-center gap-3">
                                            <Button size="sm" className="flex-1 gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg transition-all" asChild>
                                                <Link href={`/projects/${project.id}`}>
                                                    <ZapIcon className="h-4 w-4" /> View Details
                                                </Link>
                                            </Button>

                                            <div className="flex items-center gap-3 w-full">
                                                {project.github && project.github !== "" && (
                                                    <Button size="sm" variant="outline" className="flex-1 gap-2 rounded-xl border-zinc-200/50 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-800 transition-all font-bold text-xs" asChild>
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                            <GithubIcon className="h-4 w-4" /> Code
                                                        </a>
                                                    </Button>
                                                )}

                                                {project.link && project.link !== "" && (
                                                    <Button size="sm" variant="outline" className="flex-1 gap-2 rounded-xl border-zinc-200/50 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-800 transition-all font-bold text-xs text-center" asChild>
                                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLinkIcon className="h-4 w-4" /> Live
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-zinc-500 dark:text-zinc-400">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
