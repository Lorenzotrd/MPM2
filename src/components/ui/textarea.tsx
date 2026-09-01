import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full border border-input bg-secondary px-3 py-2 text-sm placeholder:text-muted-foreground/60 outline-none focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
