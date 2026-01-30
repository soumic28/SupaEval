import { AlertCircle, AlertTriangle, CheckCircle2, Info, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "success" | "tip" | "danger";

interface CalloutProps {
    variant?: CalloutVariant;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const variantStyles: Record<CalloutVariant, {
    container: string;
    icon: React.ReactNode;
    iconColor: string;
}> = {
    info: {
        container: "bg-blue-500/5 border-blue-500/20",
        icon: <Info className="w-5 h-5" />,
        iconColor: "text-blue-500"
    },
    warning: {
        container: "bg-yellow-500/5 border-yellow-500/20",
        icon: <AlertTriangle className="w-5 h-5" />,
        iconColor: "text-yellow-500"
    },
    success: {
        container: "bg-green-500/5 border-green-500/20",
        icon: <CheckCircle2 className="w-5 h-5" />,
        iconColor: "text-green-500"
    },
    tip: {
        container: "bg-indigo-500/5 border-indigo-500/20",
        icon: <Lightbulb className="w-5 h-5" />,
        iconColor: "text-indigo-500"
    },
    danger: {
        container: "bg-red-500/5 border-red-500/20",
        icon: <AlertCircle className="w-5 h-5" />,
        iconColor: "text-red-500"
    }
};

export function Callout({ variant = "info", title, children, className }: CalloutProps) {
    const styles = variantStyles[variant];

    return (
        <div className={cn(
            "rounded-xl border p-4 backdrop-blur-sm",
            styles.container,
            className
        )}>
            <div className="flex gap-3">
                <div className={cn("flex-shrink-0 mt-0.5", styles.iconColor)}>
                    {styles.icon}
                </div>
                <div className="flex-1 space-y-2">
                    {title && (
                        <div className={cn("font-semibold text-sm", styles.iconColor)}>
                            {title}
                        </div>
                    )}
                    <div className="text-sm text-muted-foreground leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
