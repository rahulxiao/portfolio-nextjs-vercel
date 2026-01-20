import {
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    TwitterIcon,
    ArrowUpRightIcon,
    SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { SocialLink } from "./social-link";
import { GradientText } from "./gradient-text";
import { Button } from "./button";
import Image from "next/image";
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-24 overflow-hidden border-t border-zinc-200 bg-white/40 pt-16 pb-8 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/40">
            {/* Giant name */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 select-none opacity-[0.02] dark:opacity-[0.03]">
                <span className="text-[18rem] font-black tracking-tighter text-zinc-950 dark:text-white">
                    RAHUL
                </span>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                {/* Main grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link href="/" className="group mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 transition-all group-hover:shadow-xl group-hover:shadow-purple-500/40 overflow-hidden">
                                <Image
                                    src="/image/logo.png"
                                    alt="Rahul Biswas"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div>
                                <GradientText gradient="purple-pink-blue" className="text-2xl">
                                    Rahul Biswas
                                </GradientText>
                                <p className="mt-1 text-xs tracking-widest text-zinc-500">
                                    FULL STACK DEVELOPER
                                </p>
                            </div>
                        </Link>

                        <p className="mb-6 max-w-sm text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Crafting high-end digital experiences with a focus on aesthetics,
                            performance, and user-centric design.
                        </p>

                        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <SparklesIcon size={16} className="text-purple-500" />
                            Built with Next.js
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-2">
                        <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Experience", href: "/experiences" },
                                { label: "Skills", href: "/skills" },
                                { label: "Projects", href: "/projects" },
                                { label: "About", href: "/about" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
                                    >
                                        <span className="h-px w-0 bg-purple-500 transition-all group-hover:w-3" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-2">
                        <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                            Legal
                        </h4>
                        <ul className="space-y-4">
                            {["Privacy Policy", "Terms", "License"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="md:col-span-3">
                        <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                            Connect
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            <SocialLink icon={GithubIcon} label="GitHub" href="https://github.com/rahulxiao" />
                            <SocialLink icon={LinkedinIcon} label="LinkedIn" href="https://www.linkedin.com/in/rahul-biswas-6a2993232/" />
                            <SocialLink icon={TwitterIcon} label="Twitter" href="https://x.com/rahulxiao" />
                            <SocialLink icon={MailIcon} label="Email" href="mailto:rahulbiswasaiub@gmail.com" />
                        </div>

                        <div className="mt-8 text-sm">
                            <p className="font-medium text-zinc-900 dark:text-white underline decoration-purple-500/50 underline-offset-4">
                                Currently based in
                            </p>
                            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                Dhaka, Bangladesh (GMT +6)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-6 dark:border-zinc-800 md:flex-row">
                    <p className="text-sm text-zinc-500">
                        © {currentYear} Rahul Biswas. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-xs text-zinc-500">
                        <Link
                            href="https://github.com/rahulxiao/portfolio-nextjs-vercel"
                            target="_blank"
                            className="flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-white"
                        >
                            View Source <ArrowUpRightIcon size={14} />
                        </Link>

                        <span className="font-mono uppercase tracking-tight text-zinc-400">
                            Designed with ❤️ by Rahul
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
