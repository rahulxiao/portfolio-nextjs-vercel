import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { BriefcaseIcon, CalendarIcon, MapPinIcon, GraduationCapIcon, AwardIcon, SparklesIcon } from "lucide-react";

const experiences = [
    {
        title: "Game Developer (Contract)",
        company: "Deepchain Labs",
        location: "Remote",
        period: "Apr 2024 – Apr 2025",
        description: "Developed gameplay features and interactive prototypes using Unreal Engine. Implemented core systems and mechanics with C#. Focused on performance optimization and high-fidelity graphics.",
        technologies: ["Unreal Engine", "C#", "Blueprints", "Performance Tuning"],
        icon: BriefcaseIcon,
        color: "from-blue-500 to-cyan-500",
        type: "Work"
    },
    {
        title: "Bachelor of Science in Computer Science & Engineering",
        company: "American International University-Bangladesh",
        location: "Dhaka, Bangladesh",
        period: "2022 – Present",
        description: "Focusing on software engineering, network security, AI, and DBMS. Maintaining a CGPA of 3.48 and actively participating in project showcases. 1st Runner-Up in App Showcasing at AIUB CS Fest 2024.",
        technologies: ["DSA", "Operating Systems", "Network Security", "AI", "DBMS"],
        icon: GraduationCapIcon,
        color: "from-purple-500 to-pink-500",
        type: "Education"
    },
    {
        title: "Higher Secondary Certificate",
        company: "Khulna Public College",
        location: "Khulna, Bangladesh",
        period: "2020 – 2021",
        description: "Major in Science. Graduated with a GPA of 4.94/5.00. Focus on analytical thinking and foundational science.",
        technologies: ["Physics", "Chemistry", "Mathematics", "Analytical Skills"],
        icon: GraduationCapIcon,
        color: "from-orange-500 to-red-500",
        type: "Education"
    },
    {
        title: "Secondary School Certificate",
        company: "Khulna Public College",
        location: "Khulna, Bangladesh",
        period: "2018 – 2019",
        description: "Major in Science. Graduated with a perfect GPA of 5.00/5.00.",
        technologies: ["General Science", "ICT", "Mathematics"],
        icon: GraduationCapIcon,
        color: "from-emerald-500 to-teal-500",
        type: "Education"
    },
];

export function ExperiencesSection() {
    return (
        <section id="experiences" className="py-24 px-6 sm:px-8 lg:px-12 bg-transparent overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="Experience & Education"
                    subtitle="A chronicle of my professional journey, academic background, and contributions to the tech community."
                    gradient="blue-indigo-purple"
                />

                <div className="relative mt-24">
                    {/* Background Light Rays (Server Rendered) */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20 dark:opacity-40">
                        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
                    </div>

                    {/* Timeline Line (Static Gradient for SSR) */}
                    <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 md:left-1/2 md:-translate-x-0.5" />

                    <div className="space-y-16 md:space-y-32">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.title + index}
                                className={`relative flex flex-col md:flex-row items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Dot on timeline */}
                                <div className="absolute left-4 top-1/2 z-20 h-5 w-5 -translate-y-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-zinc-900 dark:border-zinc-950 dark:bg-white md:left-1/2">
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-40 animate-pulse`} />
                                </div>

                                {/* Content Side */}
                                <div className="ml-10 md:ml-0 md:w-1/2 md:px-16">
                                    <GlassCard className="group relative overflow-hidden p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] border-zinc-200/50 dark:border-zinc-800/50">
                                        {/* Corner Decoration */}
                                        <div className="absolute -top-6 -right-6 p-10 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                                            <SparklesIcon size={80} className="text-zinc-400 dark:text-zinc-600" />
                                        </div>

                                        <div className="mb-6 flex flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-xl shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                                                    <exp.icon size={28} />
                                                </div>
                                                <div>
                                                    <Badge variant="secondary" className="mb-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-none">
                                                        {exp.type}
                                                    </Badge>
                                                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                                        {exp.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                {exp.company}
                                            </p>
                                        </div>

                                        <div className="mb-6 flex flex-wrap gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                            <div className="flex items-center gap-2 group/info">
                                                <CalendarIcon size={18} className="text-zinc-400 group-hover/info:text-blue-500 transition-colors" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-2 group/info">
                                                <MapPinIcon size={18} className="text-zinc-400 group-hover/info:text-pink-500 transition-colors" />
                                                {exp.location}
                                            </div>
                                        </div>

                                        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center rounded-lg bg-zinc-100/80 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </GlassCard>
                                </div>

                                {/* Empty Side for desktop */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA or Note */}
                <div className="mt-20 text-center animate-in fade-in duration-1000 fill-mode-both" style={{ animationDelay: '800ms' }}>
                    <p className="text-zinc-500 dark:text-zinc-500 italic">
                        Continuously learning and exploring new horizons in technology...
                    </p>
                </div>
            </div>
        </section>
    );
}
