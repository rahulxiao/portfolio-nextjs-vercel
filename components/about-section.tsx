import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";

export function AboutSection() {
    const stats = [
        { label: "Years Experience", value: "1+" },
        { label: "Projects Completed", value: "3+" },
        { label: "Technologies", value: "15+" },
        { label: "Happy Clients", value: "3+" },
    ];

    return (
        <section id="about" className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="About Me"
                    subtitle="A passionate developer dedicated to building high-quality web applications."
                />

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                            I'm Rahul Biswas, a Computer Science student and Developer
                        </h3>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Currently pursuing my Bachelor of Science in Computer Science & Engineering at <strong>American International University-Bangladesh (AIUB)</strong>. I have a strong foundation in software engineering, data structures, and algorithms.
                        </p>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Beyond my academic journey, I've worked as a Contract Game Developer at Deepchain Labs, where I honed my skills in C# and Unreal Engine. My passion lies in building multi-tenant SaaS applications and AI-driven platforms like EmoTracker.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-none">1st Runner-Up – App Showcasing (AIUB CS Fest 2024)</Badge>
                            <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-none">Finalist – NWE Project Showcasing (NWU CS Fest 2025)</Badge>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="outline">Full Stack Dev</Badge>
                            <Badge variant="outline">Game Developer</Badge>
                            <Badge variant="outline">AI Enthusiast</Badge>
                            <Badge variant="outline">Problem Solver</Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat) => (
                            <GlassCard key={stat.label} className="flex flex-col items-center justify-center text-center">
                                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {stat.label}
                                </span>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
