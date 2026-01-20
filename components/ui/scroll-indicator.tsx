import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    text?: string;
}

function ScrollIndicator({
    text = "Scroll",
    className,
    ...props
}: ScrollIndicatorProps) {
    return (
        <div
            className={cn("absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce", className)}
            {...props}
        >
            <div className="flex flex-col items-center gap-2">
                <div className="size-6 rounded-full border-2 border-zinc-400 dark:border-zinc-600">
                    <div className="mx-auto mt-1.5 size-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                </div>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                    {text}
                </span>
            </div>
        </div>
    );
}

export { ScrollIndicator };
