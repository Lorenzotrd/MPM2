import { Link } from "react-router-dom"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { company, engagements, prestations, realisations, values } from "@/data/site"
import { Container, Eyebrow, Heading, Photo, Section } from "@/components/site/Section"
import { PrestationIcon } from "@/components/site/Icons"
import { CtaBand } from "@/components/site/CtaBand"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="pt-20 pb-14 text-center sm:pt-28">
          <Eyebrow center>{company.tagline}</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] font-normal tracking-tight sm:text-5xl lg:text-6xl">
            Votre extérieur, pensé avec vous, <span className="font-light text-gold">réalisé par nous</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Portails, clôtures, terrasses, pergolas, bardages et menuiseries à {company.zone}. Nous étudions chaque projet avec vous, du choix des matériaux jusqu'aux finitions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg"><Link to="/contact">Parlons de votre projet</Link></Button>
            <Button asChild size="lg" variant="outline"><a href={company.phoneHref}><PhoneIcon /> {company.phone}</a></Button>
          </div>
        </Container>

        {/* Bandeau photo en biais, repris de la charte */}
        <div className="hidden h-[clamp(240px,32vw,420px)] md:flex">
          {prestations.map((p, i) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="group relative flex-1 -mr-[5%] last:mr-0"
              style={{ clipPath: i === prestations.length - 1 ? "none" : "polygon(0 0,100% 0,84% 100%,0 100%)" }}
            >
              <Photo src={p.images[0]?.src} alt={p.images[0]?.alt} className="size-full" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-6 pt-10 pb-5 text-lg font-medium tracking-wide group-hover:text-gold">{p.nav}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Accès rapides prestations */}
      <Container>
        <div className="grid grid-cols-2 border sm:grid-cols-3 lg:grid-cols-6">
          {prestations.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="flex flex-col gap-3 border-b border-r p-5 transition-colors hover:bg-card sm:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r lg:last:border-r-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r"
            >
              <PrestationIcon name={p.icon} className="size-8 text-gold" />
              <span className="text-[11px] font-medium uppercase leading-snug tracking-[0.14em]">
                {p.nav}
                <span className="block font-normal text-muted-foreground">{p.sub}</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>

      {/* Accompagnement */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Plus qu'une pose</Eyebrow>
            <Heading>Chaque projet est étudié individuellement</Heading>
            <p className="mt-6 text-muted-foreground">
              Un portail, une clôture, une terrasse, une pergola, un bardage ou un aménagement intérieur : nous ne nous contentons pas de poser. Nous prenons le temps de comprendre votre habitation, vos habitudes et votre budget, puis nous vous conseillons sur les matériaux, les modèles et les solutions qui tiendront dans le temps.
            </p>
            <p className="mt-4 text-muted-foreground">C'est ce qui nous permet de proposer du sur mesure sans mauvaise surprise, et de rester disponibles bien après la fin du chantier.</p>
            <Button asChild variant="link" className="mt-6 px-0"><Link to="/engagements">Découvrir nos engagements <ArrowRightIcon /></Link></Button>
          </div>
          <div className="grid grid-cols-2 gap-px border bg-border">
            {engagements.map((e) => (
              <div key={e.title} className="bg-background p-7">
                <div className="text-4xl font-light text-gold">{e.stat}</div>
                <div className="mt-3 text-sm text-muted-foreground">{e.short === "Expertise offerte" ? "L'expertise de votre extérieur est offerte" : e.short === "Devis sous 48 h" ? "pour recevoir votre devis après étude du projet" : e.short === "Chantier propre" ? "des chantiers laissés propres, finitions soignées" : "après les travaux, nous revenons faire le point"}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Prestations */}
      <Section className="border-t bg-card">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Nos prestations</Eyebrow>
              <Heading>Six métiers, une seule équipe</Heading>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">Des solutions sur mesure pour l'extérieur et l'intérieur, avec un interlocuteur unique du premier rendez-vous au bilan à un an.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {prestations.map((p) => (
              <Card key={p.slug} className="group bg-background">
                <Photo src={p.images[0]?.src} alt={p.images[0]?.alt} className="aspect-[4/3]" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <PrestationIcon name={p.icon} className="size-6 text-gold" />
                    <CardTitle>{p.title}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-3">{p.intro}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild variant="link" className="px-0"><Link to={`/${p.slug}`}>Voir les solutions <ArrowRightIcon /></Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Réalisations */}
      <Section className="border-t">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Nos réalisations</Eyebrow>
              <Heading>Quelques chantiers récents</Heading>
            </div>
            <Button asChild variant="link" className="px-0"><a href={company.instagram} target="_blank" rel="noopener">Plus de photos sur Instagram <ArrowRightIcon /></a></Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
            {realisations.slice(0, 5).map((r, i) => (
              <Photo key={r.src} src={r.src} alt={r.alt} className={i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Valeurs */}
      <Section className="border-t text-center">
        <Container>
          <Eyebrow center>Notre façon de travailler</Eyebrow>
          <blockquote className="mx-auto mt-6 max-w-3xl text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
            Nous ne faisons pas que poser. Nous vous accompagnons dans la réflexion et le choix de la solution <span className="text-gold">la plus adaptée à votre projet.</span>
          </blockquote>
          <Separator className="mx-auto mt-10 w-16 bg-gold" />
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {values.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
