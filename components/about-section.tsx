import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";

export function AboutSection() {
    const stats = [
        { label: "Years Experience", value: "3+" },
        { label: "Projects Completed", value: "20+" },
        { label: "Technologies", value: "15+" },
        { label: "Happy Clients", value: "10+" },
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
                            I'm a Full Stack Developer based in Bangladesh
                        </h3>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            With over 3 years of experience in the software industry, I specialize in building
                            scalable, user-centric applications using React, Next.js, and Node.js.
                        </p>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            My journey began with a curiosity for how things work on the web, which led me to
                            pursue a career in software development. I love tackling complex problems and
                            turning them into simple, beautiful solutions.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="outline">Problem Solver</Badge>
                            <Badge variant="outline">Creative Thinker</Badge>
                            <Badge variant="outline">Fast Learner</Badge>
                            <Badge variant="outline">Team Player</Badge>
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
