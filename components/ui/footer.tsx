import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import { SocialLink } from "./social-link";
import { GradientText } from "./gradient-text";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200 bg-white/40 py-12 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/40">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link href="/" className="mb-6 flex items-center gap-2 text-2xl font-bold">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30">
                                R
                            </div>
                            <GradientText gradient="purple-pink-blue">Rahul</GradientText>
                        </Link>
                        <p className="max-w-xs text-zinc-600 dark:text-zinc-400">
                            Crafting beautiful, performant, and user-friendly web experiences with modern technologies. Let’s build something great together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "/about" },
                                { label: "Skills", href: "/skills" },
                                { label: "Projects", href: "/projects" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-600 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                            Socials
                        </h4>
                        <div className="flex flex-wrap gap-4">
                            <SocialLink icon={GithubIcon} label="GitHub" href="https://github.com" />
                            <SocialLink icon={LinkedinIcon} label="LinkedIn" href="https://linkedin.com" hoverColor="blue" />
                            <SocialLink icon={TwitterIcon} label="Twitter" href="https://twitter.com" hoverColor="blue" />
                            <SocialLink icon={MailIcon} label="Email" href="mailto:rahul@example.com" hoverColor="purple" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        © {currentYear} Rahul Biswas. All rights reserved. Built with Next.js, Tailwind, and Love.
                    </p>
                </div>
            </div>
        </footer>
    );
}
