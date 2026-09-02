import { company } from "@/data/site"

type Props = {
  title: string
  description: string
  /** Chemin de la page, ex. "/portails". */
  path: string
  /** Image de partage (chemin absolu depuis la racine du site). */
  image?: string
  noindex?: boolean
}

/* React 19 remonte automatiquement <title>, <meta> et <link> dans le <head>.
   Chaque page déclare donc son propre titre, sa description et son URL canonique. */
export function Seo({ title, description, path, image = "/og-image.jpg", noindex = false }: Props) {
  const fullTitle = title.includes(company.short) ? title : `${title} | ${company.short} ${company.name}`
  const url = `${company.siteUrl}${path === "/" ? "/" : path.replace(/\/$/, "")}`
  const img = `${company.siteUrl}${image}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </>
  )
}
