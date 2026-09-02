import { company } from "@/data/site"
import { Container, Eyebrow, Heading, Section } from "@/components/site/Section"
import { Seo } from "@/components/site/Seo"

export default function Mentions() {
  return (
    <Section>
      <Seo title="Mentions légales" description={`Mentions légales du site de ${company.name}, ${company.city}.`} path="/mentions-legales" noindex />
      <Container className="max-w-3xl">
        <Eyebrow>Informations légales</Eyebrow>
        <Heading as="h1">Mentions légales</Heading>
        <div className="mt-8 space-y-6 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Éditeur du site</strong><br />
            {company.name}<br />
            {company.address[0]}, {company.address[1]}<br />
            Tél. {company.phone} · {company.email}<br />
            {/* TODO : renseigner le SIRET et la forme juridique (obligatoire). */}
            SIRET : à compléter · Forme juridique : à compléter
          </p>
          <p>
            <strong className="text-foreground">Hébergement</strong><br />
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis · vercel.com
          </p>
          <p>
            <strong className="text-foreground">Données personnelles</strong><br />
            Les informations transmises via le formulaire de contact (nom, téléphone, e-mail, commune, description du projet) servent uniquement à répondre à votre demande de devis. Elles ne sont ni cédées ni vendues, et sont conservées le temps du traitement de votre demande. Conformément au RGPD, vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à {company.email}.
          </p>
          <p>
            <strong className="text-foreground">Cookies</strong><br />
            Ce site n'utilise aucun cookie de suivi ni outil de mesure d'audience.
          </p>
          <p>
            <strong className="text-foreground">Crédits</strong><br />
            Photos : {company.name}. Reproduction interdite sans autorisation.
          </p>
        </div>
      </Container>
    </Section>
  )
}
