import { SectionHeading } from "./ui/section-heading";
import { GlassCard } from "./ui/glass-card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon, GithubIcon, LinkedinIcon, TwitterIcon, MessageSquareIcon, SparklesIcon } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 sm:px-8 lg:px-12 overflow-hidden relative">
            {/* Background Light Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] bg-purple-600/10 blur-[120px] rounded-full" />

            <div className="mx-auto max-w-4xl text-center">
                <div className="mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <SectionHeading
                        title="Get In Touch"
                        subtitle="Have a project in mind or just want to say hello? My inbox is always open. Whether you have a question or just want to connect, I'll try my best to get back to you!"
                        gradient="purple-pink-blue"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 fill-mode-both">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-25 blur-xl transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
                        <Button
                            size="lg"
                            className="relative h-20 px-12 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40"
                            asChild
                        >
                            <a href="mailto:rahulbiswasaiub@gmail.com">
                                <SendIcon className="mr-3 h-6 w-6" />
                                Say Hello
                            </a>
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {[
                            { icon: GithubIcon, href: "https://github.com/rahulxiao", label: "GitHub" },
                            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/rahul-biswas-6a2993232/", label: "LinkedIn" },
                            { icon: TwitterIcon, href: "https://x.com/rahulxiao", label: "Twitter" },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-zinc-500 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors font-medium border-b border-transparent hover:border-purple-600"
                            >
                                <item.icon size={18} />
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
