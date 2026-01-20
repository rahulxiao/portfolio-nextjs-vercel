import { cn } from "@/lib/utils";
import { GradientText } from "./gradient-text";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    gradient?: "purple-pink-blue" | "emerald-teal-blue" | "orange-red-pink" | "blue-indigo-purple";
}

export function SectionHeading({
    title,
    subtitle,
    className,
    gradient = "purple-pink-blue",
}: SectionHeadingProps) {
    return (
        <div className={cn("mb-12 flex flex-col items-center text-center", className)}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
                <GradientText gradient={gradient}>{title}</GradientText>
            </h2>
            {subtitle && (
                <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
        </div>
    );
}
