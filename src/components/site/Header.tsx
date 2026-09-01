import { Link, NavLink } from "react-router-dom"
import { MenuIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { company, prestations } from "@/data/site"
import { Container } from "./Section"
import { cn } from "@/lib/utils"

const links = [
  { to: "/", label: "Accueil", end: true },
  ...prestations.map((p) => ({ to: `/${p.slug}`, label: p.nav, end: false })),
  { to: "/engagements", label: "Engagements", end: false },
  { to: "/contact", label: "Contact", end: false },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.12em] transition-colors hover:text-foreground border-b border-transparent py-1",
    isActive ? "text-foreground border-gold" : "text-muted-foreground"
  )

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link to="/" className="shrink-0" aria-label={`${company.name}, accueil`}>
          <img src="/logo-mpm.png" alt={company.name} className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-3.5 xl:flex 2xl:gap-5" aria-label="Navigation principale">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm" className="hidden 2xl:inline-flex">
            <a href={company.phoneHref}>
              <PhoneIcon /> {company.phone}
            </a>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="xl:hidden" aria-label="Ouvrir le menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:max-w-sm">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="px-6 pt-6">
              <img src="/logo-mpm.png" alt={company.name} className="h-10 w-auto" />
            </div>
            <nav className="flex flex-col px-6" aria-label="Menu mobile">
              {links.map((l) => (
                <SheetClose asChild key={l.to}>
                  <NavLink to={l.to} end={l.end} className={({ isActive }) => cn("border-b py-3.5 text-sm uppercase tracking-[0.14em]", isActive ? "text-gold" : "text-foreground")}>
                    {l.label}
                  </NavLink>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-6">
              <Separator />
              <Button asChild variant="outline">
                <a href={company.phoneHref}><PhoneIcon /> {company.phone}</a>
              </Button>
              <SheetClose asChild>
                <Button asChild><Link to="/contact">Demander un devis</Link></Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
