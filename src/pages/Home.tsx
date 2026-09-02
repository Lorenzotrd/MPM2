import { Link } from "react-router-dom"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { communes, company, engagements, photos, prestations, realisations, values } from "@/data/site"
import { Container, Eyebrow, Heading, Photo, Picture, Section } from "@/components/site/Section"
import { PrestationIcon } from "@/components/site/Icons"
import { CtaBand } from "@/components/site/CtaBand"
import { Seo } from "@/components/site/Seo"

const engagementText: Record<string, string> = {
  "Expertise offerte": "L'expertise de votre extérieur est offerte",
  "Devis sous 48 h": "pour recevoir votre devis après étude du projet",
  "Chantier propre": "des chantiers laissés propres, finitions soignées",
  "Bilan à 1 an": "après les travaux, nous revenons faire le point",
}

/* Vignette d'une prestation dans le bandeau : photo si elle existe, sinon fond noir cohérent. */
function StripBackground({ src, alt, sizes }: { src?: string; alt: string; sizes: string }) {
  if (!src) return <div className="size-full bg-[linear-gradient(160deg,#1c1813,#0b0b0b)]" aria-hidden="true" />
  return <Picture src={src} alt={alt} sizes={sizes} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
}

export default function Home() {
  return (
    <>
      <Seo
        title={`${company.short} ${company.name} : portails, clôtures, terrasses, pergolas dans les Landes`}
        description={`Artisan à Saint-Vincent-de-Tyrosse : portails, clôtures, terrasses bois, pergolas, bardages et menuiseries sur mesure. Expertise gratuite, devis sous 48 h, suivi 1 an. ${communes.slice(1, 6).join(", ")}.`}
        path="/"
      />

      {/* Hero plein écran sur photo */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden sm:min-h-[88vh]">
        <Picture src={photos.terrassePiscine} alt="" sizes="100vw" loading="eager" decoding="sync" fetchPriority="high" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <Container className="relative pb-16 pt-28 sm:pb-28 sm:pt-32">
          <Eyebrow>{company.tagline}</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-normal tracking-tight sm:text-6xl lg:text-7xl">
            Votre extérieur, pensé avec vous, <span className="font-light text-gold">réalisé par nous</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Portails, clôtures, terrasses, pergolas, bardages et menuiseries à {company.zone}. Chaque projet est étudié avec vous, du choix des matériaux jusqu'aux finitions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/contact">Parlons de votre projet</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-black/30 backdrop-blur hover:bg-black/50"><a href={company.phoneHref}><PhoneIcon /> {company.phone}</a></Button>
          </div>
          <ul className="mt-12 hidden gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 md:flex">
            {prestations.map((p) => <li key={p.slug} className="flex items-center gap-6 [&:not(:first-child)]:before:h-1 [&:not(:first-child)]:before:w-1 [&:not(:first-child)]:before:bg-gold [&:not(:first-child)]:before:content-['']">{p.nav}</li>)}
          </ul>
        </Container>
      </section>

      {/* Accès prestations, bandeau en biais repris de la charte */}
      <section className="border-y">
        {/* Desktop : bandes en biais */}
        <div className="hidden h-[clamp(200px,26vw,340px)] md:flex">
          {prestations.map((p, i) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="group relative flex-1 -mr-[5%] overflow-hidden last:mr-0"
              style={{ clipPath: i === prestations.length - 1 ? "none" : "polygon(0 0,100% 0,84% 100%,0 100%)" }}
            >
              <StripBackground src={p.images[0]?.src} alt={p.images[0]?.alt ?? ""} sizes="20vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-5 pb-5 pr-[16%]">
                <PrestationIcon name={p.icon} className="size-6 shrink-0 text-gold" />
                <span className="text-sm font-medium uppercase tracking-[0.14em] group-hover:text-gold">{p.nav}<span className="block text-[10px] font-normal tracking-[0.12em] text-white/60">{p.sub}</span></span>
              </div>
            </Link>
          ))}
        </div>
        {/* Mobile : carrés qui défilent lentement de droite à gauche */}
        <div className="overflow-hidden md:hidden">
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex" aria-hidden={copy === 1 || undefined}>
                {prestations.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/${p.slug}`}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="group relative mr-2 aspect-square w-[68vw] max-w-[300px] shrink-0 overflow-hidden"
                  >
                    <StripBackground src={p.images[0]?.src} alt={p.images[0]?.alt ?? ""} sizes="70vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-5 pb-5">
                      <PrestationIcon name={p.icon} className="size-6 shrink-0 text-gold" />
                      <span className="text-sm font-medium uppercase tracking-[0.14em]">{p.nav}<span className="block text-[10px] font-normal tracking-[0.12em] text-white/60">{p.sub}</span></span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <div className="mt-3 text-sm text-muted-foreground">{engagementText[e.short] ?? e.short}</div>
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
                <Photo src={p.images[0]?.src} alt={p.images[0]?.alt} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" />
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
            <p className="max-w-md text-sm text-muted-foreground">Terrasses, pergolas, clôtures et bardages posés dans le sud des Landes.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
            {realisations.slice(0, 5).map((r, i) => (
              <Photo key={r.src} src={r.src} alt={r.alt} sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"} className={i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"} />
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

      {/* Zone d'intervention */}
      <Section className="border-t bg-card">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <Eyebrow>Zone d'intervention</Eyebrow>
            <Heading>Sud des Landes et Pays basque</Heading>
          </div>
          <p className="text-muted-foreground">
            Basés à {company.city}, nous intervenons à {communes.filter((c) => c !== company.city).join(", ")} et dans toutes les communes alentour. Le déplacement pour l'expertise de votre projet est offert.
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
