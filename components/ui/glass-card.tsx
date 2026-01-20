import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/40 p-6 backdrop-blur-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/40",
                hoverEffect && "hover:-translate-y-2 hover:border-zinc-300 hover:bg-white/60 hover:shadow-xl dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
