import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
    {
        variants: {
            variant: {
                default:
                    "border-zinc-200/60 bg-white/60 text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/60 dark:text-zinc-300",
                secondary:
                    "border-zinc-200 bg-zinc-100 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-50",
                destructive:
                    "border-red-200/60 bg-red-50/60 text-red-700 dark:border-red-800/60 dark:bg-red-900/60 dark:text-red-300",
                outline: "border-zinc-200 text-zinc-900 dark:border-zinc-800 dark:text-zinc-50",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
