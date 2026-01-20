import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    GraduationCap,
    LayoutTemplate,
    Trophy,
    Cpu,
    Briefcase,
    Globe,
    Code2,
    Gamepad2,
    Smartphone
} from "lucide-react";
import Image from "next/image";

export function GridInfo() {
    return (
        <BentoGrid className="max-w-7xl mx-auto px-4 md:px-8 md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className}
                />
            ))}
        </BentoGrid>
    );
}

const AcademicHeader = () => (
    <div className="flex flex-col gap-4 p-4 h-full w-full bg-black/5 dark:bg-zinc-950/50 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">AIUB Progress</span>
            <span className="text-[10px] font-bold text-purple-500">3.48 CGPA</span>
        </div>
        <div className="h-6 w-full bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[87%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-bold text-white uppercase">CSE</span>
        </div>
        <div className="h-6 w-3/4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full self-start relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[70%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-bold text-white uppercase">AI</span>
        </div>
        <div className="h-6 w-2/3 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[95%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-bold text-white uppercase">Web</span>
        </div>
    </div>
);

const ProjectHeader = () => (
    <div className="flex flex-col gap-3 p-4 h-full w-full bg-black/5 dark:bg-zinc-950/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-2">
            <div className="size-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase">Live Features</span>
        </div>
        <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-500/20 translate-x-[-40%]" />
        </div>
        <div className="h-2 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
        <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full" />
        <div className="h-2 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
        <div className="flex gap-2 mt-auto">
            <div className="h-4 w-12 rounded bg-blue-500/10 border border-blue-500/20" />
            <div className="h-4 w-12 rounded bg-purple-500/10 border border-purple-500/20" />
        </div>
    </div>
);

const AchievementHeader = () => (
    <div className="relative h-full w-full bg-gradient-to-tr from-purple-600/20 via-blue-600/20 to-pink-600/20 rounded-xl border border-white/10 flex items-center justify-center group overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
        <Trophy className="size-16 text-purple-500 dark:text-purple-400 opacity-20 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
        <div className="absolute bottom-4 text-center">
            <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase">RANK #02</span>
        </div>
    </div>
);

const TechStackHeader = () => (
    <div className="flex items-center justify-center gap-4 h-full w-full px-4">
        {/* Web Card */}
        <div className="flex-1 max-w-[140px] p-4 flex flex-col items-center gap-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rotate-[-4deg] hover:rotate-0 transition-all duration-300">
            <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Globe size={24} />
            </div>
            <p className="text-[10px] text-center font-bold text-zinc-600 dark:text-zinc-300">Web Specialist</p>
            <div className="flex gap-1 flex-wrap justify-center">
                <span className="text-[7px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">Next.js</span>
                <span className="text-[7px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">NestJS</span>
            </div>
        </div>
        {/* Game Card - Center */}
        <div className="flex-1 max-w-[140px] p-4 flex flex-col items-center gap-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 scale-110 z-10 shadow-2xl shadow-purple-500/10">
            <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Gamepad2 size={24} />
            </div>
            <p className="text-[10px] text-center font-bold text-zinc-600 dark:text-zinc-300">Game Engine</p>
            <div className="flex gap-1 flex-wrap justify-center">
                <span className="text-[7px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">Unreal 5</span>
                <span className="text-[7px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">C#</span>
            </div>
        </div>
        {/* Mobile Card */}
        <div className="flex-1 max-w-[140px] p-4 flex flex-col items-center gap-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rotate-[4deg] hover:rotate-0 transition-all duration-300">
            <div className="size-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                <Smartphone size={24} />
            </div>
            <p className="text-[10px] text-center font-bold text-zinc-600 dark:text-zinc-300">Mobile Dev</p>
            <div className="flex gap-1 flex-wrap justify-center">
                <span className="text-[7px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">React Native</span>
            </div>
        </div>
    </div>
);

const DeepchainHeader = () => (
    <div className="flex flex-col gap-4 p-4 h-full w-full bg-black/5 dark:bg-zinc-950/50 rounded-xl border border-zinc-200 dark:border-zinc-800 group">
        <div className="flex items-start gap-2 p-3 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <div className="size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                <Briefcase size={16} />
            </div>
            <div className="flex flex-col">
                <p className="text-[8px] font-black text-zinc-900 dark:text-white uppercase leading-none mb-1">Deepchain Labs</p>
                <p className="text-[9px] text-zinc-500 dark:text-zinc-400">Contract Game Developer</p>
            </div>
        </div>
        <div className="mt-auto flex items-center justify-between p-2.5 rounded-2xl bg-purple-600 text-white shadow-xl shadow-purple-500/20 group-hover:scale-[1.02] transition-transform">
            <span className="text-[9px] font-bold ml-2 uppercase tracking-tighter">Performance Tuning</span>
            <div className="size-5 rounded-lg bg-white/20 flex items-center justify-center">
                <Cpu size={12} className="text-white" />
            </div>
        </div>
    </div>
);

const items = [
    {
        title: "BSc in CSE at AIUB",
        description: "Currently pursuing my degree with a focus on Software Engineering and AI.",
        header: <AcademicHeader />,
        className: "md:col-span-1",
        icon: <GraduationCap className="h-4 w-4 text-purple-500" />,
    },
    {
        title: "SaaS Portfolio Builder",
        description: "Built a multi-tenant platform with Stripe and clean backend architecture.",
        header: <ProjectHeader />,
        className: "md:col-span-1",
        icon: <LayoutTemplate className="h-4 w-4 text-blue-500" />,
    },
    {
        title: "AIUB CS Fest 2024",
        description: "Proudly secured 1st Runner-Up in the App Showcasing competition.",
        header: <AchievementHeader />,
        className: "md:col-span-1",
        icon: <Trophy className="h-4 w-4 text-orange-500" />,
    },
    {
        title: "Professional Tech Stack",
        description: "Mastering the trifecta of modern development: Web, Mobile, and Game Engines.",
        header: <TechStackHeader />,
        className: "md:col-span-2",
        icon: <Code2 className="h-4 w-4 text-zinc-500" />,
    },
    {
        title: "Experience at Deepchain",
        description: "Leveling up performance and mechanics in Unreal Engine 5.",
        header: <DeepchainHeader />,
        className: "md:col-span-1",
        icon: <Gamepad2 className="h-4 w-4 text-pink-500" />,
    },
];
