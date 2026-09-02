import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { engagements, values } from "@/data/site"
import { Container, Eyebrow, Heading, Section } from "@/components/site/Section"
import { CtaBand } from "@/components/site/CtaBand"
import { Seo } from "@/components/site/Seo"

export default function Engagements() {
  return (
    <>
      <Seo
        title="Nos engagements : expertise offerte, devis sous 48 h, suivi à 1 an"
        description="Ce que nous nous engageons à faire pour chaque client : expertise gratuite à domicile, devis détaillé sous 48 h, chantier propre et finitions soignées, bilan un an après les travaux."
        path="/engagements"
      />
      <Section className="border-b">
        <Container>
          <Eyebrow>Nos engagements</Eyebrow>
          <Heading as="h1" className="max-w-3xl">Notre accompagnement, du premier rendez-vous à un an après les travaux</Heading>
          <p className="mt-6 max-w-2xl text-muted-foreground">Nous souhaitons mettre en avant notre accompagnement et la qualité de notre travail. Voici concrètement ce que nous nous engageons à faire pour chaque client.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <ol className="grid gap-px border bg-border md:grid-cols-2 lg:grid-cols-4">
            {engagements.map((e, i) => (
              <li key={e.title} className="bg-background p-8">
                <span className="text-4xl font-light text-gold">{i + 1}</span>
                <h2 className="mt-6 text-xl font-medium">{e.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{e.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="border-t bg-card text-center">
        <Container>
          <Eyebrow center>Ce que vous pouvez attendre de nous</Eyebrow>
          <blockquote className="mx-auto mt-6 max-w-3xl text-2xl font-light leading-snug sm:text-3xl">
            Nous ne faisons pas uniquement de la pose : nous accompagnons le client dans la réflexion et le choix de la solution <span className="text-gold">la plus adaptée à son projet.</span>
          </blockquote>
          <Separator className="mx-auto mt-10 w-16 bg-gold" />
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {values.map((v) => <li key={v}>{v}</li>)}
          </ul>
          <Button asChild size="lg" className="mt-10"><Link to="/contact">Parlons de votre projet</Link></Button>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
