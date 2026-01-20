import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experiences", href: "/experiences" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    return (
        <header className="sticky top-4 z-50 w-full">
            {/* Center wrapper */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Rounded floating bar */}
                <div className="relative flex h-16 items-center justify-between rounded-full border border-zinc-200/60 bg-white/60 px-6 backdrop-blur-xl shadow-lg shadow-purple-500/10 transition-all dark:border-zinc-800/60 dark:bg-zinc-950/60">

                    {/* Soft glow */}
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent blur-xl" />

                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-3 transition-transform hover:scale-[1.03]"
                    >
                        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-md shadow-purple-500/30 transition-all group-hover:shadow-lg">
                            <Image
                                src="/image/logo.png"
                                alt="Rahul Biswas"
                                width={36}
                                height={36}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                priority
                            />
                        </div>

                        <GradientText
                            gradient="purple-pink-blue"
                            className="hidden text-lg font-bold tracking-tight sm:block"
                        >
                            Rahul Biswas
                        </GradientText>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group relative text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                <span className="transition-colors group-hover:text-zinc-900 dark:group-hover:text-white">
                                    {item.label}
                                </span>
                                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <Link href="/contact">
                            <Button
                                size="sm"
                                className="hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 text-white shadow-md shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-lg md:flex"
                            >
                                Hire Me
                            </Button>
                        </Link>

                        <MobileMenu navItems={navItems} />
                    </div>
                </div>
            </div>
        </header>
    );
}
