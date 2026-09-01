import { Link } from "react-router-dom"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { InstagramIcon } from "@/components/site/Icons"
import { company, prestations, mailto } from "@/data/site"
import { Container } from "./Section"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src="/logo-mpm.png" alt={company.name} className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            {company.tagline}. Clôtures, portails, terrasses, pergolas, bardages et menuiseries à {company.zone}.
          </p>
        </div>
        <div>
          <p className="eyebrow">Prestations</p>
          <ul className="mt-4 space-y-2 text-sm">
            {prestations.map((p) => (
              <li key={p.slug}><Link to={`/${p.slug}`} className="text-muted-foreground hover:text-gold">{p.title}</Link></li>
            ))}
            <li><Link to="/engagements" className="text-muted-foreground hover:text-gold">Nos engagements</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><MapPinIcon className="mt-0.5 size-4 shrink-0 text-gold" /><span>{company.address[0]}<br />{company.address[1]}</span></li>
            <li className="flex gap-3"><PhoneIcon className="mt-0.5 size-4 shrink-0 text-gold" /><a href={company.phoneHref} className="hover:text-gold">{company.phone}</a></li>
            <li className="flex gap-3"><MailIcon className="mt-0.5 size-4 shrink-0 text-gold" /><a href={mailto("Demande de devis")} className="hover:text-gold">{company.email}</a></li>
            <li className="flex gap-3"><InstagramIcon className="mt-0.5 size-4 shrink-0 text-gold" /><a href={company.instagram} target="_blank" rel="noopener" className="hover:text-gold">{company.instagramLabel}</a></li>
          </ul>
          <Button asChild className="mt-6" size="sm"><Link to="/contact">Demander un devis</Link></Button>
        </div>
      </Container>
      <Separator />
      <Container className="flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <Link to="/mentions-legales" className="hover:text-gold">Mentions légales</Link>
      </Container>
    </footer>
  )
}
