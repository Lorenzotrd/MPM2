import { Link, useParams } from "react-router-dom"
import { CheckIcon, MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { catalogueMail, company, prestations } from "@/data/site"
import { Container, Eyebrow, Photo, Picture, Section } from "@/components/site/Section"
import { PrestationIcon } from "@/components/site/Icons"
import { Seo } from "@/components/site/Seo"
import NotFound from "./NotFound"

export default function PrestationPage() {
  const { slug } = useParams()
  const p = prestations.find((x) => x.slug === slug)
  if (!p) return <NotFound />
  const others = prestations.filter((x) => x.slug !== p.slug)
  const [main, ...rest] = p.images
  const ogImage = main?.src ? `/photos/${main.src}-1024.webp` : undefined

  return (
    <>
      <Seo title={p.seoTitle} description={p.seoDescription} path={`/${p.slug}`} image={ogImage} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.title,
          serviceType: p.title,
          description: p.seoDescription,
          areaServed: company.zone,
          provider: { "@type": "LocalBusiness", name: company.name, telephone: company.phoneIntl, url: company.siteUrl },
          url: `${company.siteUrl}/${p.slug}`,
        })}
      </script>
      {p.faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          })}
        </script>
      )}

      {/* En-tête plein écran : photo si elle existe, sinon fond noir avec l'icône du métier */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden sm:min-h-[70vh]">
        {main?.src ? (
          <Picture src={main.src} alt="" sizes="100vw" loading="eager" decoding="sync" fetchPriority="high" className="absolute inset-0 size-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(160deg,#1c1813,#050505)]" aria-hidden="true">
            <PrestationIcon name={p.icon} className="absolute right-[-4%] top-1/2 size-[70vh] -translate-y-1/2 text-gold/10 sm:right-[6%]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
        <Container className="relative pb-16 pt-32 sm:pb-20">
          <Eyebrow>{p.title}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-normal tracking-tight sm:text-5xl lg:text-6xl">{p.headline}</h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">{p.intro}</p>
        </Container>
      </section>

      {/* Ce que nous proposons */}
      <Section>
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="space-y-12">
            {p.sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-normal sm:text-3xl">{s.title}</h2>
                {s.text && <p className="mt-3 max-w-xl text-muted-foreground">{s.text}</p>}
                <ul className="mt-6 divide-y border-y">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-4 py-3.5 text-sm">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Photo src={rest[0]?.src} alt={rest[0]?.alt} sizes="(min-width: 1024px) 45vw, 100vw" className="col-span-2 aspect-[16/10]" />
            <Photo src={rest[1]?.src} alt={rest[1]?.alt} sizes="(min-width: 1024px) 22vw, 50vw" className="aspect-[4/3]" />
            <Photo src={main?.src} alt={main?.alt} sizes="(min-width: 1024px) 22vw, 50vw" className="aspect-[4/3]" />
            {rest.slice(2).map((img, i) => (
              <Photo key={`${img.src ?? "vide"}-${i}`} src={img.src} alt={img.alt} sizes="(min-width: 1024px) 22vw, 50vw" className="aspect-[4/3]" />
            ))}
          </div>
        </Container>
      </Section>

      {/* Matériaux : tableau lisible d'un coup d'œil */}
      <Section className="border-t bg-card">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>{p.materialsTitle}</Eyebrow>
            <h2 className="mt-4 text-2xl font-normal sm:text-3xl">Bien choisir son matériau</h2>
            <p className="mt-3 text-muted-foreground">Chaque solution a ses points forts. Voici de quoi vous repérer avant que l'on en parle ensemble lors de l'expertise gratuite.</p>
          </div>
          <div className="mt-10 overflow-hidden border">
            <div className="hidden grid-cols-[220px_1fr_1fr] gap-8 border-b bg-background px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground md:grid">
              <span>Matériau</span><span>Avantages</span><span>À savoir</span>
            </div>
            {p.materials.map((m) => (
              <div key={m.name} className="grid gap-3 border-b px-6 py-6 last:border-b-0 md:grid-cols-[220px_1fr_1fr] md:gap-8">
                <h3 className="text-lg font-medium">{m.name}</h3>
                <p className="text-sm text-muted-foreground"><span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-gold md:hidden">Avantages</span>{m.pros}</p>
                <p className="text-sm text-muted-foreground"><span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-gold md:hidden">À savoir</span>{m.cons}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      {p.faq.length > 0 && (
        <Section className="border-t">
          <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow>Questions fréquentes</Eyebrow>
              <h2 className="mt-4 text-2xl font-normal sm:text-3xl">Ce que l'on nous demande souvent</h2>
            </div>
            <Accordion type="single" collapsible className="border-t">
              {p.faq.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent className="max-w-2xl">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Section>
      )}

      {/* Un seul appel à l'action */}
      <section className="border-t bg-card">
        <Container className="grid gap-8 py-16 md:grid-cols-[1.2fr_1fr] md:items-center sm:py-20">
          <div>
            <h2 className="text-3xl font-normal sm:text-4xl">Un projet {p.nav.toLowerCase()} ?</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">Nous venons étudier votre extérieur gratuitement, vous recevez un devis sous 48 h, et nous revenons faire le point un an après les travaux.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button asChild size="lg"><Link to="/contact">Demander un devis</Link></Button>
            <Button asChild size="lg" variant="outline"><a href={catalogueMail(p.title)}><MailIcon /> Catalogue par e-mail</a></Button>
          </div>
        </Container>
      </section>

      {/* Voir aussi */}
      <nav className="border-t" aria-label="Autres prestations">
        <Container className="flex flex-wrap items-center gap-x-6 gap-y-1 py-6 text-[11px] font-medium uppercase tracking-[0.16em]">
          <span className="py-2 text-muted-foreground">Voir aussi</span>
          {others.map((o) => (
            <Link key={o.slug} to={`/${o.slug}`} className="inline-flex min-h-11 items-center px-1 text-foreground/80 hover:text-gold">{o.nav}</Link>
          ))}
        </Container>
      </nav>
    </>
  )
}
