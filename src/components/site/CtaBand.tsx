import { Link } from "react-router-dom"
import { PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/data/site"
import { Container } from "./Section"

export function CtaBand() {
  return (
    <section className="border-y bg-card">
      <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-normal sm:text-3xl">Parlons de votre projet</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">Expertise de votre extérieur offerte, devis sous 48 h après étude du projet, suivi un an après les travaux.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Demander un devis</Link></Button>
          <Button asChild size="lg" variant="outline"><a href={company.phoneHref}><PhoneIcon /> {company.phone}</a></Button>
        </div>
      </Container>
    </section>
  )
}
