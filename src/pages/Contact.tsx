import { useState } from "react"
import { CheckCircle2Icon, LoaderCircleIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { communes, company, mailto, prestations } from "@/data/site"
import { Container, Eyebrow, Heading, Section } from "@/components/site/Section"
import { Seo } from "@/components/site/Seo"

const projets = [...prestations.map((p) => p.title), "Aménagement intérieur", "Plusieurs projets"]

/* Envoi du formulaire via Web3Forms (gratuit, sans compte : https://web3forms.com).
   La clé d'accès est fournie par la variable d'environnement VITE_WEB3FORMS_KEY (Vercel > Settings >
   Environment Variables). Tant qu'elle n'est pas définie, le formulaire ouvre le client mail du visiteur. */
const WEB3FORMS_KEY: string | undefined = import.meta.env.VITE_WEB3FORMS_KEY

type Status = "idle" | "sending" | "sent" | "error"

export default function Contact() {
  const [projet, setProjet] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    const g = (k: string) => String(f.get(k) ?? "").trim()

    if (g("botcheck")) return // piège à robots, un humain ne remplit pas ce champ

    const subject = `Demande de devis : ${projet} (${g("nom")})`
    const body = `Bonjour,\n\nJe souhaite un devis pour : ${projet}\n\nNom : ${g("nom")}\nTéléphone : ${g("tel")}\nE-mail : ${g("email")}\nCommune : ${g("commune")}\n\nProjet :\n${g("message")}\n\nMerci`

    if (!WEB3FORMS_KEY) {
      window.location.href = mailto(subject, body)
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: `Site ${company.short}`,
          replyto: g("email"),
          "Type de projet": projet,
          Nom: g("nom"),
          Téléphone: g("tel"),
          "E-mail": g("email"),
          Commune: g("commune"),
          Projet: g("message"),
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message ?? res.statusText)
      setStatus("sent")
      form.reset()
      setProjet("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <Section>
      <Seo
        title="Contact et demande de devis gratuit"
        description={`Demandez votre devis gratuit sous 48 h : portail, clôture, terrasse, pergola, bardage ou menuiserie. ${company.name}, ${company.city}, tél. ${company.phone}.`}
        path="/contact"
      />
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Contact / Demande de devis</Eyebrow>
          <Heading as="h1">Parlons de votre projet</Heading>
          <p className="mt-6 text-muted-foreground">Appelez-nous, écrivez-nous ou remplissez le formulaire. Nous fixons ensemble un rendez-vous pour l'expertise gratuite de votre extérieur, puis vous recevez votre devis sous 48 h.</p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4"><MapPinIcon className="mt-1 size-5 shrink-0 text-gold" /><div><Label>Atelier</Label><p className="mt-1">{company.address[0]}<br />{company.address[1]}</p></div></li>
            <li className="flex gap-4"><PhoneIcon className="mt-1 size-5 shrink-0 text-gold" /><div><Label>Téléphone</Label><p className="mt-1"><a href={company.phoneHref} className="inline-block py-1 hover:text-gold">{company.phone}</a></p></div></li>
            <li className="flex gap-4"><MailIcon className="mt-1 size-5 shrink-0 text-gold" /><div><Label>E-mail</Label><p className="mt-1"><a href={mailto("Demande de devis")} className="inline-block py-1 break-all hover:text-gold">{company.email}</a></p></div></li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild><a href={company.phoneHref}><PhoneIcon /> Appeler</a></Button>
            <Button asChild variant="outline"><a href={mailto("Demande de devis")}><MailIcon /> Envoyer un e-mail</a></Button>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Nous intervenons à {communes.join(", ")} et alentour.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-normal">Demander un devis</CardTitle>
            <CardDescription>Expertise de votre extérieur offerte. Réponse sous 48 h après étude du projet.</CardDescription>
          </CardHeader>
          <CardContent>
            {status === "sent" ? (
              <div className="flex flex-col items-start gap-4 py-6" role="status">
                <CheckCircle2Icon className="size-10 text-gold" />
                <p className="text-xl">Merci, votre demande est bien envoyée.</p>
                <p className="text-sm text-muted-foreground">Nous vous rappelons rapidement pour fixer le rendez-vous d'expertise. Pour une urgence, appelez le {company.phone}.</p>
                <Button variant="outline" onClick={() => setStatus("idle")}>Envoyer une autre demande</Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid gap-2"><Label htmlFor="nom">Nom</Label><Input id="nom" name="nom" required autoComplete="name" /></div>
                <div className="grid gap-2"><Label htmlFor="tel">Téléphone</Label><Input id="tel" name="tel" type="tel" required autoComplete="tel" /></div>
                <div className="grid gap-2 sm:col-span-2"><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" required autoComplete="email" /></div>
                <div className="grid gap-2"><Label htmlFor="commune">Commune</Label><Input id="commune" name="commune" placeholder={company.city} autoComplete="address-level2" /></div>
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
                {status === "error" && (
                  <p className="text-sm text-destructive sm:col-span-2" role="alert">
                    L'envoi a échoué. Réessayez, ou appelez-nous directement au <a href={company.phoneHref} className="underline">{company.phone}</a>.
                  </p>
                )}
                <Button type="submit" size="lg" disabled={status === "sending"} className="sm:col-span-2 sm:justify-self-start">
                  {status === "sending" ? <><LoaderCircleIcon className="animate-spin" /> Envoi en cours</> : "Envoyer ma demande"}
                </Button>
                <p className="text-xs text-muted-foreground sm:col-span-2">Vos coordonnées servent uniquement à répondre à votre demande. Elles ne sont ni cédées ni vendues.</p>
              </form>
            )}
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
