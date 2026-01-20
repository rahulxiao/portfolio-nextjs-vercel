import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: LucideIcon;
    label: string;
    hoverColor?: "default" | "blue" | "purple" | "pink" | "green";
}

const hoverColorVariants = {
    default: "hover:text-zinc-900 dark:hover:text-white",
    blue: "hover:text-blue-600 dark:hover:text-blue-400",
    purple: "hover:text-purple-600 dark:hover:text-purple-400",
    pink: "hover:text-pink-600 dark:hover:text-pink-400",
    green: "hover:text-emerald-600 dark:hover:text-emerald-400",
};

function SocialLink({
    icon: Icon,
    label,
    hoverColor = "default",
    className,
    ...props
}: SocialLinkProps) {
    return (
        <a
            className={cn(
                "group flex size-12 items-center justify-center rounded-full border border-zinc-200 bg-white/60 text-zinc-700 shadow-sm backdrop-blur-sm transition-all hover:scale-110 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900",
                hoverColorVariants[hoverColor],
                className
            )}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            <Icon className="size-5 transition-transform group-hover:rotate-12" />
        </a>
    );
}

export { SocialLink };
