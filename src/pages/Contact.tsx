import { useState } from "react"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { InstagramIcon } from "@/components/site/Icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { company, mailto, prestations } from "@/data/site"
import { Container, Eyebrow, Heading, Section } from "@/components/site/Section"

const projets = [...prestations.map((p) => p.title), "Aménagement intérieur", "Plusieurs projets"]

export default function Contact() {
  const [projet, setProjet] = useState("")

  // Sans back-end : ouvre le client mail avec le message pré-rempli.
  // À remplacer par Formspree / Resend / le module de l'hébergeur une fois en ligne.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const g = (k: string) => String(f.get(k) ?? "")
    const body = `Bonjour,\n\nJe souhaite un devis pour : ${projet}\n\nNom : ${g("nom")}\nTéléphone : ${g("tel")}\nE-mail : ${g("email")}\nCommune : ${g("commune")}\n\nProjet :\n${g("message")}\n\nMerci`
    window.location.href = mailto(`Demande de devis : ${projet} (${g("nom")})`, body)
  }

  return (
    <Section>
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Contact / Demande de devis</Eyebrow>
          <Heading as="h1">Parlons de votre projet</Heading>
          <p className="mt-6 text-muted-foreground">Appelez-nous, écrivez-nous ou remplissez le formulaire. Nous fixons ensemble un rendez-vous pour l'expertise gratuite de votre extérieur, puis vous recevez votre devis sous 48 h.</p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4"><MapPinIcon className="mt-1 size-5 shrink-0 text-gold" /><div><Label>Atelier</Label><p className="mt-1">{company.address[0]}<br />{company.address[1]}</p></div></li>
            <li className="flex gap-4"><PhoneIcon className="mt-1 size-5 shrink-0 text-gold" /><div><Label>Téléphone</Label><p className="mt-1"><a href={company.phoneHref} className="hover:text-gold">{company.phone}</a></p></div></li>
            <li className="flex gap-4"><MailIcon className="mt-1 size-5 shrink-0 text-gold" /><div><Label>E-mail</Label><p className="mt-1"><a href={mailto("Demande de devis")} className="hover:text-gold">{company.email}</a></p></div></li>
            <li className="flex gap-4"><InstagramIcon className="mt-1 size-5 shrink-0 text-gold" /><div><Label>Instagram</Label><p className="mt-1"><a href={company.instagram} target="_blank" rel="noopener" className="hover:text-gold">{company.instagramLabel}</a></p></div></li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild><a href={company.phoneHref}><PhoneIcon /> Appeler</a></Button>
            <Button asChild variant="outline"><a href={mailto("Demande de devis")}><MailIcon /> Envoyer un e-mail</a></Button>
            <Button asChild variant="outline"><a href={company.instagram} target="_blank" rel="noopener"><InstagramIcon /> Instagram</a></Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-normal">Demander un devis</CardTitle>
            <CardDescription>Expertise de votre extérieur offerte. Réponse sous 48 h après étude du projet.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2"><Label htmlFor="nom">Nom</Label><Input id="nom" name="nom" required autoComplete="name" /></div>
              <div className="grid gap-2"><Label htmlFor="tel">Téléphone</Label><Input id="tel" name="tel" type="tel" required autoComplete="tel" /></div>
              <div className="grid gap-2 sm:col-span-2"><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" required autoComplete="email" /></div>
              <div className="grid gap-2"><Label htmlFor="commune">Commune</Label><Input id="commune" name="commune" placeholder="Saint-Vincent-de-Tyrosse" /></div>
              <div className="grid gap-2">
                <Label htmlFor="projet">Type de projet</Label>
                <Select value={projet} onValueChange={setProjet} required>
                  <SelectTrigger id="projet"><SelectValue placeholder="Choisir" /></SelectTrigger>
                  <SelectContent>
                    {projets.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 sm:col-span-2"><Label htmlFor="message">Décrivez votre projet</Label><Textarea id="message" name="message" placeholder="Dimensions approximatives, matériau envisagé, délai souhaité..." /></div>
              <Button type="submit" size="lg" className="sm:col-span-2 sm:justify-self-start">Envoyer ma demande</Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
