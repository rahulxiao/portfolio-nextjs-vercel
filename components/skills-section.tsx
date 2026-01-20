import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import {
    Code2Icon,
    LayersIcon,
    LayoutIcon,
    DatabaseIcon,
    TerminalIcon,
    PaletteIcon
} from "lucide-react";

export function SkillsSection() {
    const skillCategories = [
        {
            title: "Languages",
            icon: Code2Icon,
            skills: ["JavaScript", "TypeScript", "Python", "PHP", "Kotlin", "C++", "C#", "Java"],
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Frontend & Mobile",
            icon: LayoutIcon,
            skills: ["React", "Next.js", "Tailwind CSS", "React Native", "Android (Kotlin)"],
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
        {
            title: "Backend & DB",
            icon: DatabaseIcon,
            skills: ["NestJS", "Node.js", "PostgreSQL", "MySQL", "TypeORM"],
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
        {
            title: "Game Dev & Tools",
            icon: TerminalIcon,
            skills: ["Unreal Engine 5", "Blueprints", "Git & GitHub", "Diversion"],
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
    ];

    return (
        <section id="skills" className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="My Skills"
                    subtitle="A comprehensive list of the technologies and tools I use to bring ideas to life."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category) => (
                        <GlassCard key={category.title} className="group border-transparent bg-white/30 dark:bg-zinc-900/30">
                            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${category.bg} ${category.color}`}>
                                <category.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                        <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
