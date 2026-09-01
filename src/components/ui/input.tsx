import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full border border-input bg-secondary px-3 py-2 text-sm placeholder:text-muted-foreground/60 outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
