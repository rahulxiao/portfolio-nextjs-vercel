import * as React from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    showGrid?: boolean;
    showOrbs?: boolean;
}

function AnimatedBackground({
    showGrid = true,
    showOrbs = true,
    className,
    children,
    ...props
}: AnimatedBackgroundProps) {
    return (
        <div
            className={cn(
                "relative min-h-screen w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900",
                className
            )}
            {...props}
        >
            {/* Background elements (Fixed) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Grid Pattern */}
                {showGrid && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                )}

                {/* Gradient Orbs */}
                {showOrbs && (
                    <>
                        <div className="absolute -left-40 -top-40 size-[500px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] animate-pulse" />
                        <div className="absolute -right-40 top-1/4 size-[600px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] animate-pulse [animation-delay:2s]" />
                        <div className="absolute bottom-[-10%] left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-pink-500/10 dark:bg-pink-500/5 blur-[120px] animate-pulse [animation-delay:4s]" />
                        <div className="absolute top-1/2 left-1/4 size-[400px] rounded-full bg-violet-500/10 dark:bg-violet-500/5 blur-[120px] animate-pulse [animation-delay:6s]" />
                    </>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export { AnimatedBackground };
