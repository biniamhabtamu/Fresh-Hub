import * as React from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

/**
 * Simple Badge component.
 * Usage: <Badge variant="success">Live</Badge>
 */
const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-slate-100 text-slate-800",
  secondary: "bg-indigo-50 text-indigo-700",
  destructive: "bg-red-100 text-red-700",
  outline: "bg-transparent border border-slate-200 text-slate-800",
  success: "bg-emerald-100 text-emerald-800",
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-2 py-0.5 text-xs font-medium select-none",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"

export { Badge }
