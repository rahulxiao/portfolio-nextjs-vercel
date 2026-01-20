"use client";

import { use } from "react";
import { projects } from "@/lib/projects-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon, ArrowLeftIcon, CalendarIcon, Code2Icon, LayersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-vh-100 p-20">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/projects">
                    <Button variant="outline">Back to Projects</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 -mt-[80px]">
            {/* Header / Hero */}
            <div className="relative h-[65vh] w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-40 blur-[2px]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 dark:via-zinc-950/20 to-white dark:to-zinc-950" />
                <div className="absolute inset-0 flex items-center justify-center p-6 pt-24">
                    <div className="max-w-4xl w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 mb-6 hover:underline">
                                <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Portfolio
                            </Link>
                            <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-none px-4 py-1">
                                {project.category}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                {project.github && (
                                    <Button asChild className="rounded-full px-8">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <GithubIcon className="mr-2 h-4 w-4" /> View Code
                                        </a>
                                    </Button>
                                )}
                                {project.link && (
                                    <Button asChild variant="outline" className="rounded-full px-8 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <LayersIcon className="mr-3 h-6 w-6 text-purple-500" /> Project Overview
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
                            {project.description}
                        </p>

                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Code2Icon className="mr-3 h-6 w-6 text-purple-500" /> Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-10">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                            <h3 className="font-bold mb-4 flex items-center">
                                <CalendarIcon className="mr-2 h-4 w-4 text-purple-500" /> Project Info
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Category</span>
                                    <span className="font-medium">{project.category}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Status</span>
                                    <span className="font-medium text-green-500">Completed</span>
                                </div>
                            </div>
                        </div>

                        {/* Project Images Gallery snippet */}
                        {project.images && project.images.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="font-bold">Gallery</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {project.images.map((img, idx) => (
                                        <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                                            <Image src={img} alt={`${project.title} gallery ${idx}`} fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
