import type { Prestation } from "@/data/site"

const paths: Record<Prestation["icon"], string> = {
  cloture: "M4 12v16M10 10v18M16 8v20M22 10v18M28 12v16M4 16h24M4 24h24",
  portail: "M3 8v20M29 8v20M3 10l13 4 13-4M3 26l13-4 13 4M16 14v8",
  terrasse: "M4 14l12-6 12 6-12 6zM4 19l12 6 12-6M4 24l12 6 12-6",
  pergola: "M3 10h26M6 10v18M26 10v18M9 14h14M9 18h14M9 22h14",
  bardage: "M8 4v24M13 4v24M18 4v24M23 4v24",
  menuiserie: "M6 4h20v24H6zM16 4v24M9 8l5 4-5 4M23 8l-5 4 5 4",
}

export function PrestationIcon({ name, className = "size-8" }: { name: Prestation["icon"]; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
