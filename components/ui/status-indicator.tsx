import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
    status?: "online" | "offline" | "busy" | "away";
}

const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-zinc-400",
    busy: "bg-red-500",
    away: "bg-yellow-500",
};

const statusPingColors = {
    online: "bg-emerald-400",
    offline: "bg-zinc-300",
    busy: "bg-red-400",
    away: "bg-yellow-400",
};

function StatusIndicator({
    status = "online",
    className,
    ...props
}: StatusIndicatorProps) {
    return (
        <span className={cn("relative flex size-2", className)} {...props}>
            <span
                className={cn(
                    "absolute inline-flex size-full animate-ping rounded-full opacity-75",
                    statusPingColors[status]
                )}
            />
            <span
                className={cn(
                    "relative inline-flex size-2 rounded-full",
                    statusColors[status]
                )}
            />
        </span>
    );
}

export { StatusIndicator };
