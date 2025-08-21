import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: "sm" | "md" | "lg"
}

/**
 * Simple Avatar component.
 * Usage: <Avatar src="/user.png" alt="User" size="md" />
 */
const sizeClasses: Record<AvatarProps["size"], string> = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = "avatar", size = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex overflow-hidden rounded-full bg-gray-100 border border-slate-200",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="w-full h-full flex items-center justify-center text-slate-500 font-medium">
            {alt[0].toUpperCase()}
          </span>
        )}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

export { Avatar }
