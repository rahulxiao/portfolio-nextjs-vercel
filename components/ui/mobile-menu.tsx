"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
    label: string;
    href: string;
}

export function MobileMenu({ navItems }: { navItems: NavItem[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-zinc-300 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <XIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                ) : (
                    <MenuIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                )}
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 top-20 animate-fade-in-down border-t border-zinc-200 bg-white/95 py-4 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-900/95">
                    <div className="flex flex-col gap-4 px-6">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
                        >
                            Hire Me
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
