import * as React from "react"
import { cn } from "@/lib/utils"

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />
}

export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("py-20 sm:py-28", className)} {...props} />
}

export function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={cn("eyebrow eyebrow-line", center && "justify-center after:h-px after:w-8 after:bg-gold after:content-['']")}>{children}</p>
  )
}

export function Heading({ as: Tag = "h2", className, ...props }: React.ComponentProps<"h2"> & { as?: "h1" | "h2" | "h3" }) {
  return <Tag className={cn("mt-4 text-3xl leading-[1.12] font-normal tracking-tight sm:text-4xl lg:text-5xl", className)} {...props} />
}

export function Photo({ src, alt, label, className }: { src?: string; alt?: string; label?: string; className?: string }) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-card", className)}>
        <img src={src} alt={alt ?? ""} loading="lazy" className="size-full object-cover" />
      </div>
    )
  }
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden border border-white/5 bg-[linear-gradient(160deg,#1c1813,#0b0b0b)]", className)}>
      <span className="px-4 text-center text-[10px] uppercase tracking-[0.22em] text-white/25">{label ?? "Photo"}</span>
    </div>
  )
}
