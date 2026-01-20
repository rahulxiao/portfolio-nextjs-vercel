import { GlassCard } from "./ui/glass-card";
import { Button } from "./ui/button";
import { SendIcon, SparklesIcon } from "lucide-react";

export function NewsletterSection() {
    return (
        <section className="py-24 px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
                <GlassCard className="relative overflow-hidden bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20 p-8 text-center md:p-14">
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
                    <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-inner">
                            <SparklesIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl md:text-4xl">
                            Let&apos;s Build Something <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Extraordinary Together</span>
                        </h2>

                        <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400">
                            I&apos;m currently available for freelance projects and full-time opportunities.
                            Have an idea? Let&apos;s talk about it.
                        </p>

                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/40 hover:scale-105 transition-transform" asChild>
                                <a href="mailto:rahul.biswas@example.com">
                                    Send an Email <SendIcon className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
