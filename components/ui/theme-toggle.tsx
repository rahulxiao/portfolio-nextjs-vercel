"use client";

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        document.documentElement.classList.toggle("dark", newDark);
        setIsDark(newDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-zinc-300 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <SunIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
            ) : (
                <MoonIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
            )}
        </button>
    );
}
