import { Link } from "react-router-dom"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { prestations } from "@/data/site"
import { Container, Eyebrow, Heading, Section } from "@/components/site/Section"
import { Seo } from "@/components/site/Seo"

export default function NotFound() {
  return (
    <Section>
      <Seo title="Page introuvable" description="Cette page n'existe pas ou a été déplacée." path="/404" noindex />
      <Container className="max-w-3xl">
        <Eyebrow>Erreur 404</Eyebrow>
        <Heading as="h1">Cette page n'existe pas</Heading>
        <p className="mt-6 text-muted-foreground">Le lien est peut-être erroné ou la page a été déplacée. Voici où aller depuis ici.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/">Retour à l'accueil</Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/contact">Demander un devis</Link></Button>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.16em]">
          {prestations.map((p) => (
            <li key={p.slug}><Link to={`/${p.slug}`} className="inline-flex items-center gap-1 py-2 text-foreground/80 hover:text-gold">{p.nav} <ArrowRightIcon className="size-3" /></Link></li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
