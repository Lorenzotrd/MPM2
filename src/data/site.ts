export const company = {
  name: "Métal Portail & Menuiserie",
  short: "MPM",
  tagline: "Conception d'aménagement extérieur sur mesure",
  address: ["19 avenue de Casteroun", "40230 Saint-Vincent-de-Tyrosse"],
  phone: "06 40 64 87 00",
  phoneHref: "tel:+33640648700",
  email: "mpmconcept40@gmail.com",
  instagram: "https://www.instagram.com/",
  instagramLabel: "Métal Portail & Menuiserie",
  zone: "Saint-Vincent-de-Tyrosse et tout le sud des Landes",
}

export const mailto = (subject: string, body?: string) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`

export const catalogueMail = (prestation: string) =>
  mailto(
    `Demande de catalogue et devis : ${prestation}`,
    `Bonjour,\n\nJe souhaite recevoir votre catalogue ${prestation.toLowerCase()} et un devis.\n\nMon projet : \nMa commune : \nMon téléphone : \n\nMerci`
  )

export const engagements = [
  {
    title: "Expertise de votre extérieur offerte",
    short: "Expertise offerte",
    text: "Nous venons chez vous étudier votre projet, vos besoins et les différentes possibilités envisageables, sans engagement et sans frais.",
    stat: "0 €",
  },
  {
    title: "Devis sous 48 heures",
    short: "Devis sous 48 h",
    text: "Après étude du projet, vous recevez un devis clair et détaillé sous 48 heures.",
    stat: "48 h",
  },
  {
    title: "Nettoyage et finitions soignées",
    short: "Chantier propre",
    text: "Nous accordons une attention particulière à la qualité des finitions et à la propreté. Chaque chantier est laissé propre.",
    stat: "100 %",
  },
  {
    title: "Suivi un an après les travaux",
    short: "Bilan à 1 an",
    text: "Notre accompagnement ne s'arrête pas à la fin du chantier. Un an après, nous revenons faire le point sur l'installation et votre satisfaction.",
    stat: "1 an",
  },
]

export const values = ["Sérieux", "Professionnel", "À l'écoute", "Disponible", "Proche de ses clients", "Sur mesure"]

export type Img = { src: string; alt: string }
export type Material = { name: string; pros: string; cons: string }
export type Prestation = {
  slug: string
  nav: string
  title: string
  headline: string
  intro: string
  icon: "cloture" | "portail" | "terrasse" | "pergola" | "bardage" | "menuiserie"
  sub: string
  sections: { title: string; text?: string; items: string[] }[]
  materials: Material[]
  materialsTitle: string
  images: Img[]
  faq: { q: string; a: string }[]
}

export const prestations: Prestation[] = [
  {
    slug: "portails",
    nav: "Portails",
    title: "Portails",
    headline: "Le portail qui correspond à votre entrée",
    intro: "Battant ou coulissant, en aluminium, en PVC ou en acier, avec ou sans motorisation : nous vous aidons à choisir le portail adapté à votre habitation, à votre budget et à vos attentes.",
    icon: "portail",
    sub: "Alu & acier",
    sections: [
      {
        title: "Types d'ouverture",
        text: "Le choix dépend surtout de la place disponible et de la pente de votre entrée.",
        items: ["Portail battant, un ou deux vantaux", "Portail coulissant, idéal quand le recul manque", "Motorisation intégrée selon le projet", "Portillon assorti sur demande"],
      },
    ],
    materialsTitle: "Matériaux",
    materials: [
      { name: "Aluminium", pros: "Léger, ne rouille pas, aucun entretien, grand choix de coloris et de designs.", cons: "Budget plus élevé que le PVC." },
      { name: "PVC", pros: "Le plus économique, entretien facile, bonne tenue dans le temps.", cons: "Moins rigide sur les grandes largeurs, choix de couleurs plus limité." },
      { name: "Acier thermolaqué", pros: "Très robuste, rendu haut de gamme, laquage protecteur durable.", cons: "Plus lourd, motorisation à dimensionner en conséquence." },
      { name: "Acier non thermolaqué", pros: "Proposé selon les projets, pour un rendu industriel ou une mise en peinture sur place.", cons: "Demande un traitement anticorrosion et un entretien régulier." },
    ],
    images: [
      { src: "/photos/cloture-aluminium.jpg", alt: "Clôture et portail aluminium anthracite sur muret" },
      { src: "/photos/pergola-bioclimatique.jpg", alt: "Aluminium anthracite thermolaqué" },
      { src: "/photos/bardage-cloture-bois.jpg", alt: "Portillon bois assorti à la clôture" },
    ],
    faq: [
      { q: "Faut-il une autorisation pour poser un portail ?", a: "Dans la plupart des communes, une déclaration préalable de travaux suffit. Nous vérifions les règles d'urbanisme avec vous lors de l'expertise gratuite." },
      { q: "Peut-on motoriser un portail existant ?", a: "Souvent oui, selon l'état et le poids du portail. Nous l'évaluons sur place." },
    ],
  },
  {
    slug: "clotures",
    nav: "Clôtures",
    title: "Clôtures",
    headline: "Sécuriser, délimiter et embellir votre extérieur",
    intro: "Une clôture se choisit selon les règles d'urbanisme de votre commune, les autorisations éventuelles, le style recherché, le niveau d'occultation souhaité et votre budget. Nous vérifions tout cela avec vous avant de proposer une solution.",
    icon: "cloture",
    sub: "Sur mesure",
    sections: [
      {
        title: "Ce que l'on regarde ensemble",
        items: ["Règles d'urbanisme et déclaration préalable", "Hauteur et niveau d'occultation", "Style : lames, claustra, panneaux, mixte", "Nature du terrain et du sol", "Budget et entretien souhaité", "Harmonie avec le portail et la façade"],
      },
    ],
    materialsTitle: "Matériaux proposés",
    materials: [
      { name: "Aluminium", pros: "Zéro entretien, très grande durée de vie, design contemporain, s'accorde avec un portail alu.", cons: "Le plus cher des trois à l'achat." },
      { name: "PVC", pros: "Prix contenu, facile à entretenir, bonne occultation.", cons: "Peut jaunir ou se fragiliser avec les années en plein soleil." },
      { name: "Bois", pros: "Chaleureux, naturel, se marie avec une terrasse ou un bardage bois.", cons: "Demande un entretien régulier (lasure, huile) pour garder sa teinte." },
    ],
    images: [
      { src: "/photos/bardage-cloture-bois.jpg", alt: "Clôture bois pleine hauteur avec bardage assorti" },
      { src: "/photos/cloture-aluminium.jpg", alt: "Clôture aluminium à lames horizontales sur muret, Landes" },
      { src: "/photos/terrasse-pergola-bois.jpg", alt: "Clôture et haie avec terrasse bois" },
    ],
    faq: [
      { q: "Quelle hauteur maximale pour une clôture ?", a: "Elle dépend du plan local d'urbanisme de votre commune. En général 1,80 m à 2 m. Nous le vérifions pour vous." },
      { q: "Quel niveau d'occultation choisir ?", a: "Cela dépend de l'intimité souhaitée et du vis-à-vis. Lames pleines, ajourées ou claustra : on choisit sur place." },
    ],
  },
  {
    slug: "menuiseries",
    nav: "Menuiseries",
    title: "Menuiseries & aménagement intérieur",
    headline: "Des menuiseries dehors, du sur mesure dedans",
    intro: "Fenêtres, portes, volets : nous posons des menuiseries en aluminium, PVC ou bois. Et parce que le savoir-faire ne s'arrête pas au seuil, nous réalisons aussi vos parquets, dressings et aménagements intérieurs sur mesure.",
    icon: "menuiserie",
    sub: "Alu, bois & PVC",
    sections: [
      {
        title: "Menuiseries",
        text: "Solutions en aluminium, PVC ou bois selon les projets.",
        items: ["Huisseries en aluminium", "Huisseries en PVC", "Huisseries en bois", "Volets roulants", "Volets battants"],
      },
      {
        title: "Aménagement intérieur",
        text: "Des réalisations esthétiques, fonctionnelles et adaptées aux dimensions et aux besoins de chaque intérieur.",
        items: ["Pose et réalisation de parquets", "Création de dressings", "Aménagements sur mesure", "Réalisations en médium (MDF)", "Réalisations en stratifié"],
      },
    ],
    materialsTitle: "Matériaux des huisseries",
    materials: [
      { name: "Aluminium", pros: "Fin, solide, sans entretien, grandes baies possibles.", cons: "Budget plus élevé." },
      { name: "PVC", pros: "Meilleur rapport isolation / prix, entretien simple.", cons: "Profilés plus épais, coloris plus limités." },
      { name: "Bois", pros: "Noble et isolant, idéal en rénovation de caractère.", cons: "Entretien régulier à prévoir." },
    ],
    images: [
      { src: "/photos/parquet-interieur.jpg", alt: "Pose de parquet dans une pièce de vie" },
      { src: "/photos/terrasse-pergola-bois.jpg", alt: "Baies coulissantes aluminium noir" },
      { src: "/photos/terrasse-piscine.jpg", alt: "Volets roulants et menuiseries anthracite" },
    ],
    faq: [
      { q: "Faites-vous uniquement de la pose ?", a: "Non. Nous concevons et fabriquons aussi les aménagements sur mesure (dressings, rangements, habillages en MDF ou stratifié)." },
    ],
  },
  {
    slug: "terrasses",
    nav: "Terrasses",
    title: "Terrasses",
    headline: "Une terrasse bois pour vivre dehors",
    intro: "Nous réalisons des terrasses en bois naturel ou en bois composite pour aménager et valoriser votre extérieur. Le bon choix dépend de l'esthétique recherchée, de l'entretien accepté, de la résistance attendue et du budget.",
    icon: "terrasse",
    sub: "Bois",
    sections: [
      {
        title: "Ce que comprend notre prestation",
        items: ["Étude du terrain et de l'évacuation des eaux", "Structure et lambourdes adaptées", "Pose, découpes et finitions de rives", "Conseils d'entretien remis à la fin du chantier"],
      },
    ],
    materialsTitle: "Solutions proposées",
    materials: [
      { name: "Bois naturel", pros: "Rendu authentique, plusieurs essences possibles selon le budget (pin traité, bois exotiques...).", cons: "Grise naturellement, un entretien annuel garde la teinte d'origine." },
      { name: "Bois composite", pros: "Ne grise pas, ne se fend pas, sans écharde, entretien réduit à un nettoyage.", cons: "Plus cher à l'achat, chauffe davantage au soleil selon les teintes." },
    ],
    images: [
      { src: "/photos/terrasse-piscine.jpg", alt: "Terrasse bois autour d'une piscine, arbre intégré" },
      { src: "/photos/terrasse-pergola-bois.jpg", alt: "Terrasse bois sous pergola bois" },
      { src: "/photos/terrasse-piscine-2.jpg", alt: "Terrasse bois exotique avec margelles piscine" },
    ],
    faq: [
      { q: "Quelle essence de bois choisir ?", a: "Pin traité classe 4 pour le budget, bois exotique (ipé, cumaru) pour la durabilité. Nous vous montrons des échantillons." },
    ],
  },
  {
    slug: "pergolas",
    nav: "Pergolas",
    title: "Pergolas",
    headline: "Profiter de votre extérieur plus longtemps",
    intro: "En bois pour un rendu naturel, ou bioclimatique en aluminium pour régler vous-même l'ensoleillement et la ventilation grâce à ses lames orientables. Nous la dimensionnons à votre terrasse et à votre façade.",
    icon: "pergola",
    sub: "Sur mesure",
    sections: [
      {
        title: "Adossée ou autoportée",
        text: "Contre la maison pour prolonger le séjour, ou au fond du jardin pour créer un second espace de vie. On choisit ensemble sur place.",
        items: ["Pergola adossée à la façade", "Pergola autoportée", "Options : LED, stores latéraux, motorisation"],
      },
    ],
    materialsTitle: "Types de pergolas",
    materials: [
      { name: "Pergola bois", pros: "Charme naturel, s'intègre à une terrasse ou un bardage bois, structure sur mesure.", cons: "Couverture fixe (canisse, toile, polycarbonate) et entretien du bois à prévoir." },
      { name: "Bioclimatique aluminium", pros: "Lames orientables pour doser ombre et lumière, étanche lames fermées, aucun entretien.", cons: "Investissement plus important." },
    ],
    images: [
      { src: "/photos/pergola-bioclimatique.jpg", alt: "Pergola bioclimatique aluminium à lames orientables" },
      { src: "/photos/terrasse-pergola-bois.jpg", alt: "Pergola bois adossée sur terrasse" },
      { src: "/photos/terrasse-piscine.jpg", alt: "Auvent bois sur terrasse piscine" },
    ],
    faq: [
      { q: "Une pergola bioclimatique protège-t-elle de la pluie ?", a: "Oui, lames fermées elle est étanche et l'eau est évacuée par les poteaux." },
    ],
  },
  {
    slug: "bardages",
    nav: "Bardages",
    title: "Bardages",
    headline: "Habiller, protéger et valoriser vos façades",
    intro: "Le bardage change le visage d'une maison tout en protégeant ses murs. Nous proposons différents types de bardages selon le style recherché, l'entretien souhaité et le budget, en cohérence avec vos menuiseries et votre clôture.",
    icon: "bardage",
    sub: "Bois",
    sections: [
      {
        title: "Ce que l'on étudie avec vous",
        items: ["État du support et ventilation de la lame d'air", "Sens de pose et calepinage", "Finitions autour des ouvertures", "Règles d'urbanisme de la commune"],
      },
    ],
    materialsTitle: "Solutions disponibles",
    materials: [
      { name: "Bois naturel", pros: "Le rendu le plus chaleureux, pose verticale ou horizontale, à claire-voie ou jointive.", cons: "Grise avec le temps ; lasure ou saturateur pour conserver la teinte." },
      { name: "Bois composite", pros: "Aspect bois stable dans le temps, sans entretien particulier.", cons: "Budget plus élevé que le bois naturel." },
      { name: "Bardage rapporté isolant", pros: "Permet d'isoler par l'extérieur en même temps que l'on rénove la façade.", cons: "Étude technique et déclaration préalable à prévoir." },
    ],
    images: [
      { src: "/photos/bardage-cloture-bois.jpg", alt: "Bardage bois vertical à claire-voie sur façade et clôture" },
      { src: "/photos/terrasse-piscine-2.jpg", alt: "Bardage bois sur façade, détail" },
      { src: "/photos/terrasse-pergola-bois.jpg", alt: "Poteaux et charpente bois apparents" },
    ],
    faq: [
      { q: "Le bardage bois demande-t-il beaucoup d'entretien ?", a: "Non traité, il grise uniformément et reste protégé. Pour garder la teinte d'origine, un saturateur tous les 2 à 3 ans suffit." },
    ],
  },
]

export const realisations: Img[] = [
  { src: "/photos/terrasse-piscine.jpg", alt: "Terrasse bois autour d'une piscine" },
  { src: "/photos/pergola-bioclimatique.jpg", alt: "Pergola bioclimatique aluminium" },
  { src: "/photos/bardage-cloture-bois.jpg", alt: "Bardage et clôture bois" },
  { src: "/photos/terrasse-pergola-bois.jpg", alt: "Terrasse bois et pergola bois" },
  { src: "/photos/cloture-aluminium.jpg", alt: "Clôture aluminium sur muret" },
  { src: "/photos/parquet-interieur.jpg", alt: "Parquet dans une pièce de vie" },
]

