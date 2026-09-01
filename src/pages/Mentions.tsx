import { company } from "@/data/site"
import { Container, Eyebrow, Heading, Section } from "@/components/site/Section"

export default function Mentions() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Eyebrow>Informations légales</Eyebrow>
        <Heading as="h1">Mentions légales</Heading>
        <div className="mt-8 space-y-6 text-sm text-muted-foreground">
          <p><strong className="text-foreground">Éditeur du site</strong><br />{company.name}<br />{company.address[0]}, {company.address[1]}<br />Tél. {company.phone} · {company.email}<br />SIRET : à compléter · Forme juridique : à compléter</p>
          <p><strong className="text-foreground">Hébergement</strong><br />À compléter (nom, adresse et téléphone de l'hébergeur).</p>
          <p><strong className="text-foreground">Données personnelles</strong><br />Les informations transmises via le formulaire de contact servent uniquement à répondre à votre demande de devis. Elles ne sont ni cédées ni vendues. Vous pouvez demander leur suppression à {company.email}.</p>
        </div>
      </Container>
    </Section>
  )
}
