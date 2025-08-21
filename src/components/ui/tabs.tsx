import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsProps {
  value: string
  onChange: (value: string) => void
  children: React.ReactNode
  className?: string
}

interface TabProps {
  value: string
  children: React.ReactNode
}

export function Tabs({ value, onChange, children, className }: TabsProps) {
  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { selected: value, onChange })
          : child
      )}
    </div>
  )
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border-b border-gray-300 dark:border-gray-700">
      {children}
    </div>
  )
}

export function TabsTrigger({
  value,
  selected,
  onChange,
  children,
}: TabProps & { selected?: string; onChange?: (v: string) => void }) {
  const isActive = selected === value
  return (
    <button
      onClick={() => onChange?.(value)}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors",
        isActive
          ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
      )}
    >
      {children}
    </button>
  )
}

export function TabsContent({
  value,
  selected,
  children,
}: TabProps & { selected?: string }) {
  if (value !== selected) return null
  return <div className="p-4">{children}</div>
}
