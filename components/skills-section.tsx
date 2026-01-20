import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import {
    Code2Icon,
    LayersIcon,
    LayoutIcon,
    DatabaseIcon,
    TerminalIcon,
    SmartphoneIcon,
    CpuIcon,
    GlobeIcon,
    SparklesIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        title: "Languages",
        description: "Core programming languages for diverse development needs.",
        icon: Code2Icon,
        skills: ["JavaScript", "TypeScript", "Python", "PHP", "Kotlin", "C++", "C#", "Java"],
        color: "from-blue-500 to-cyan-500",
        shadow: "shadow-blue-500/20",
        delay: "0ms"
    },
    {
        title: "Frontend & Mobile",
        description: "Building responsive and immersive user interfaces.",
        icon: LayoutIcon,
        skills: ["React", "Next.js", "Tailwind CSS", "React Native", "Android (Kotlin)"],
        color: "from-purple-500 to-pink-500",
        shadow: "shadow-purple-500/20",
        delay: "100ms"
    },
    {
        title: "Backend & Systems",
        description: "Scalable server-side logic and database management.",
        icon: DatabaseIcon,
        skills: ["NestJS", "Node.js", "PostgreSQL", "MySQL", "TypeORM", "Prisma"],
        color: "from-emerald-500 to-teal-500",
        shadow: "shadow-emerald-500/20",
        delay: "200ms"
    },
    {
        title: "Game Dev & Tools",
        description: "Creating virtual worlds and optimizing performance.",
        icon: TerminalIcon,
        skills: ["Unreal Engine 5", "Blueprints", "C# (Unity)", "Git & GitHub", "Diversion"],
        color: "from-orange-500 to-red-500",
        shadow: "shadow-orange-500/20",
        delay: "300ms"
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="relative py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-[-10%] h-[500px] w-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-[-10%] h-[500px] w-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20 animate-fade-in">
                    <SectionHeading
                        title="Technical Mastery"
                        subtitle="A comprehensive overview of my technical expertise across web development, mobile applications, and game engineering."
                        gradient="purple-pink-blue"
                    />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={category.title}
                            style={{ animationDelay: category.delay }}
                            className="animate-fade-in-up fill-mode-both"
                        >
                            <GlassCard className="group h-full flex flex-col p-8 border-white/10 bg-white/5 dark:bg-zinc-900/10 hover:bg-white/10 dark:hover:bg-zinc-800/20 transition-all duration-500">
                                {/* Icon Header */}
                                <div className={cn(
                                    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl",
                                    category.color,
                                    category.shadow
                                )}>
                                    <category.icon className="h-7 w-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-zinc-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                                    {category.title}
                                </h3>
                                <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    {category.description}
                                </p>

                                {/* Skills Tags */}
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase rounded-full border border-zinc-200/50 dark:border-zinc-700/50 bg-white/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 group-hover:border-white/20 group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Floating Sparkle Effect on Hover */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <SparklesIcon className="h-4 w-4 text-white/40" />
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
            </div>
        </section>
    );
}
