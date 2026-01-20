import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";
import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-transparent transition-all duration-300">
            <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-105"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 transition-all group-hover:shadow-xl group-hover:shadow-purple-500/40">
                            <span className="text-lg font-bold text-white">R</span>
                        </div>
                        <GradientText gradient="purple-pink-blue">
                            Rahul
                        </GradientText>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group relative text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {/* CTA Button - Desktop */}
                        <Link href="/contact">
                            <Button
                                size="sm"
                                className="hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 dark:shadow-purple-500/20 dark:hover:shadow-purple-500/30 md:flex"
                            >
                                Hire Me
                            </Button>
                        </Link>

                        <MobileMenu navItems={navItems} />
                    </div>
                </div>
            </nav>
        </header>
    );
}
