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

/* Photos responsives : chaque photo existe en 640, 1024 et 1600 px de large au format WebP
   dans /public/photos. `src` est le nom de base sans extension. */
const WIDTHS = [640, 1024, 1600] as const
export const photoUrl = (src: string, w: (typeof WIDTHS)[number] = 1024) => `/photos/${src}-${w}.webp`
export const photoSrcSet = (src: string) => WIDTHS.map((w) => `${photoUrl(src, w)} ${w}w`).join(", ")

type PictureProps = Omit<React.ComponentProps<"img">, "src" | "srcSet"> & { src: string; sizes: string }

export function Picture({ src, sizes, alt = "", loading = "lazy", decoding = "async", ...props }: PictureProps) {
  return <img src={photoUrl(src)} srcSet={photoSrcSet(src)} sizes={sizes} alt={alt} loading={loading} decoding={decoding} {...props} />
}

/* Fond noir « à remplir » utilisé quand une prestation n'a pas encore de photo :
   même cadre, même place, pour garder la page cohérente. */
export function Placeholder({ label, className }: { label?: string; className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden border border-white/5 bg-[linear-gradient(160deg,#1c1813,#0b0b0b)]", className)} aria-hidden="true">
      <span className="px-4 text-center text-[10px] uppercase tracking-[0.22em] text-white/25">{label ?? "Photo à venir"}</span>
    </div>
  )
}

export function Photo({ src, alt, sizes = "(min-width: 1024px) 40vw, 100vw", className }: { src?: string; alt?: string; sizes?: string; className?: string }) {
  if (!src) return <Placeholder className={className} />
  return (
    <div className={cn("relative overflow-hidden bg-card", className)}>
      <Picture src={src} alt={alt ?? ""} sizes={sizes} className="size-full object-cover" />
    </div>
  )
}
