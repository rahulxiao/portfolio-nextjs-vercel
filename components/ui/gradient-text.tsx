import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    gradient?: "purple-pink-blue" | "emerald-teal-blue" | "orange-red-pink" | "blue-indigo-purple";
    as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const gradientVariants = {
    "purple-pink-blue":
        "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400",
    "emerald-teal-blue":
        "bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400",
    "orange-red-pink":
        "bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400",
    "blue-indigo-purple":
        "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400",
};

function GradientText({
    gradient = "purple-pink-blue",
    as: Component = "span",
    className,
    children,
    ...props
}: GradientTextProps) {
    return (
        <Component
            className={cn(
                "inline-block bg-clip-text text-transparent",
                gradientVariants[gradient],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

export { GradientText };
