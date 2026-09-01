import { Link, useParams, Navigate } from "react-router-dom"
import { ArrowRightIcon, CheckIcon, MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { catalogueMail, prestations } from "@/data/site"
import { Container, Eyebrow, Heading, Photo, Section } from "@/components/site/Section"
import { PrestationIcon } from "@/components/site/Icons"
import { CtaBand } from "@/components/site/CtaBand"

export default function PrestationPage() {
  const { slug } = useParams()
  const p = prestations.find((x) => x.slug === slug)
  if (!p) return <Navigate to="/" replace />
  const others = prestations.filter((x) => x.slug !== p.slug)

  return (
    <>
      {/* En-tête */}
      <section className="border-b">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <Eyebrow>{p.title}</Eyebrow>
            <Heading as="h1">{p.headline}</Heading>
            <p className="mt-6 max-w-xl text-muted-foreground">{p.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><a href={catalogueMail(p.title)}><MailIcon /> Demander le catalogue</a></Button>
              <Button asChild variant="outline"><Link to="/contact">Demander un devis</Link></Button>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <Photo src={p.images[0]?.src} alt={p.images[0]?.alt} className="col-span-2 row-span-2 aspect-auto" />
            <Photo src={p.images[1]?.src} alt={p.images[1]?.alt} className="aspect-square" />
            <Photo src={p.images[2]?.src} alt={p.images[2]?.alt} className="aspect-square" />
          </div>
        </Container>
      </section>

      {/* Contenu */}
      <Section>
        <Container className="grid gap-16 lg:grid-cols-[1fr_360px]">
          <div className="space-y-16">
            {p.sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-normal">{s.title}</h2>
                {s.text && <p className="mt-2 text-muted-foreground">{s.text}</p>}
                <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 border-b py-3 text-sm">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-normal">{p.materialsTitle}</h2>
              <p className="mt-2 text-muted-foreground">Chaque matériau a ses points forts. Voici de quoi vous repérer avant que l'on en parle ensemble.</p>
              <Tabs defaultValue={p.materials[0].name} className="mt-6">
                <TabsList>
                  {p.materials.map((m) => <TabsTrigger key={m.name} value={m.name}>{m.name}</TabsTrigger>)}
                </TabsList>
                {p.materials.map((m) => (
                  <TabsContent key={m.name} value={m.name}>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="border-l-2 border-gold pl-5">
                        <Badge>Avantages</Badge>
                        <p className="mt-3 text-sm text-muted-foreground">{m.pros}</p>
                      </div>
                      <div className="border-l-2 border-border pl-5">
                        <Badge variant="outline">À savoir</Badge>
                        <p className="mt-3 text-sm text-muted-foreground">{m.cons}</p>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {p.faq.length > 0 && (
              <div>
                <h2 className="text-2xl font-normal">Questions fréquentes</h2>
                <Accordion type="single" collapsible className="mt-4">
                  {p.faq.map((f, i) => (
                    <AccordionItem key={f.q} value={`faq-${i}`}>
                      <AccordionTrigger>{f.q}</AccordionTrigger>
                      <AccordionContent>{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>

          {/* Colonne latérale */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Card className="border-gold">
              <CardHeader>
                <CardTitle>Demandez votre catalogue {p.nav.toLowerCase()}</CardTitle>
                <CardDescription>Recevez par e-mail nos modèles, matériaux et options, puis un devis sous 48 h après étude de votre projet.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Button asChild><a href={catalogueMail(p.title)}><MailIcon /> Recevoir par e-mail</a></Button>
                <Button asChild variant="outline"><Link to="/contact">Demander un devis</Link></Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Nos engagements</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-gold" />Expertise de votre extérieur offerte</li>
                  <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-gold" />Devis sous 48 heures</li>
                  <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-gold" />Chantier propre, finitions soignées</li>
                  <li className="flex gap-3"><CheckIcon className="mt-0.5 size-4 shrink-0 text-gold" />Bilan un an après les travaux</li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </Container>
      </Section>

      {/* Autres prestations */}
      <section className="border-t bg-card py-14">
        <Container>
          <div className="flex items-center gap-4">
            <p className="eyebrow eyebrow-line">Autres prestations</p>
            <Separator className="flex-1" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-px border bg-border sm:grid-cols-5">
            {others.map((o) => (
              <Link key={o.slug} to={`/${o.slug}`} className="flex items-center gap-3 bg-card p-4 text-xs font-medium uppercase tracking-[0.12em] hover:bg-background">
                <PrestationIcon name={o.icon} className="size-6 text-gold" />
                {o.nav}
                <ArrowRightIcon className="ml-auto size-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
