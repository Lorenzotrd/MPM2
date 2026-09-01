import { Link } from "react-router-dom"
import { PhoneIcon } from "lucide-react"
import { company } from "@/data/site"

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold md:hidden">
      <a href={company.phoneHref} className="flex items-center justify-center gap-2 bg-background py-4 text-[11px] font-medium uppercase tracking-[0.14em]">
        <PhoneIcon className="size-4 text-gold" /> Appeler
      </a>
      <Link to="/contact" className="flex items-center justify-center bg-primary py-4 text-[11px] font-medium uppercase tracking-[0.14em] text-primary-foreground">
        Devis gratuit
      </Link>
    </div>
  )
}
