export const company = {
  name: "Métal Portail & Menuiserie",
  short: "MPM",
  tagline: "Conception d'aménagement extérieur sur mesure",
  address: ["19 avenue de Casteroun", "40230 Saint-Vincent-de-Tyrosse"],
  streetAddress: "19 avenue de Casteroun",
  postalCode: "40230",
  city: "Saint-Vincent-de-Tyrosse",
  phone: "06 40 64 87 00",
  phoneHref: "tel:+33640648700",
  phoneIntl: "+33640648700",
  email: "mpmconcept40@gmail.com",
  zone: "Saint-Vincent-de-Tyrosse et tout le sud des Landes",
  /* URL publique du site. À remplacer par le nom de domaine définitif dès qu'il est acheté
     (le sitemap et les balises canonical / Open Graph en dépendent). */
  siteUrl: "https://mpm-2.vercel.app",
}

/* Communes principales de la zone d'intervention. Servent au référencement local
   (texte du pied de page, descriptions, données structurées). */
export const communes = [
  "Saint-Vincent-de-Tyrosse",
  "Capbreton",
  "Hossegor",
  "Seignosse",
  "Soustons",
  "Saint-Geours-de-Maremne",
  "Bénesse-Maremne",
  "Labenne",
  "Angresse",
  "Dax",
  "Bayonne",
]

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

/* Photos : `src` est le chemin de base sans extension ni taille.
   Les fichiers /photos/<src>-640.webp, -1024.webp et -1600.webp doivent exister.
   Un `src` absent affiche un fond noir « à remplir » cohérent avec la charte. */
export type Img = { src?: string; alt: string }
export type Material = { name: string; pros: string; cons: string }
export type Prestation = {
  slug: string
  nav: string
  title: string
  headline: string
  intro: string
  seoTitle: string
  seoDescription: string
  icon: "cloture" | "portail" | "terrasse" | "pergola" | "bardage" | "menuiserie"
  sub: string
  sections: { title: string; text?: string; items: string[] }[]
  materials: Material[]
  materialsTitle: string
  images: Img[]
  faq: { q: string; a: string }[]
}

export const photos = {
  terrassePiscine: "terrasse-piscine",
  terrassePiscine2: "terrasse-piscine-2",
  terrassePergolaBois: "terrasse-pergola-bois",
  bardageClotureBois: "bardage-cloture-bois",
  clotureAluminium: "cloture-aluminium",
  pergolaBioclimatique: "pergola-bioclimatique",
  parquetInterieur: "parquet-interieur",
  portailAcierVert: "portail-acier-vert",
  portillonClotureAluminium: "portillon-cloture-aluminium",
  clotureBoisClaireVoie: "cloture-bois-claire-voie",
  clotureGrillageRigide: "cloture-grillage-rigide",
  abriBoisBardage: "abri-bois-bardage",
  clotureBoisPoteauxAlu: "cloture-bois-poteaux-alu",
  dressingParquetChene: "dressing-parquet-chene",
  porteAluminiumAtelier: "porte-aluminium-atelier",
  fenetreAluminiumVoletRoulant: "fenetre-aluminium-volet-roulant",
  porteFenetreBoisBlanche: "porte-fenetre-bois-blanche",
}

export const prestations: Prestation[] = [
  {
    slug: "portails",
    nav: "Portails",
    title: "Portails",
    headline: "Le portail qui correspond à votre entrée",
    intro: "Battant ou coulissant, en aluminium, en PVC ou en acier, avec ou sans motorisation : nous vous aidons à choisir le portail adapté à votre habitation, à votre budget et à vos attentes.",
    seoTitle: "Portail aluminium, PVC ou acier sur mesure à Saint-Vincent-de-Tyrosse",
    seoDescription: "Pose de portails battants ou coulissants, motorisés ou non, en aluminium, PVC ou acier thermolaqué. Expertise gratuite, devis sous 48 h, sud des Landes : Tyrosse, Capbreton, Hossegor, Soustons.",
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
      { src: photos.portailAcierVert, alt: "Portail battant deux vantaux en acier vert, piliers maçonnés" },
      { src: photos.portillonClotureAluminium, alt: "Portillon aluminium anthracite assorti à la clôture" },
      { alt: "Portail coulissant motorisé" },
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
    seoTitle: "Clôture aluminium, PVC ou bois sur mesure dans les Landes",
    seoDescription: "Pose de clôtures aluminium, PVC et bois à Saint-Vincent-de-Tyrosse et dans le sud des Landes. Occultation, hauteur, règles d'urbanisme : on étudie tout avec vous. Expertise gratuite, devis sous 48 h.",
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
      { name: "Grillage rigide", pros: "Le plus économique sur de grandes longueurs, pose rapide, discret, occultation possible avec des lames.", cons: "Peu occultant sans lames ou brise-vue, rendu plus technique que décoratif." },
    ],
    images: [
      { src: photos.clotureBoisPoteauxAlu, alt: "Clôture en lames bois horizontales sur poteaux aluminium anthracite" },
      { src: photos.clotureAluminium, alt: "Clôture aluminium anthracite à lames horizontales sur muret, Landes" },
      { src: photos.clotureBoisClaireVoie, alt: "Clôture bois à claire-voie sur muret et en limite de jardin" },
      { src: photos.portillonClotureAluminium, alt: "Clôture occultante anthracite avec portillon aluminium" },
      { src: photos.clotureGrillageRigide, alt: "Clôture en grillage rigide sur soubassement béton" },
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
    seoTitle: "Menuiseries alu, PVC, bois et aménagement intérieur sur mesure",
    seoDescription: "Fenêtres, portes, volets roulants et battants en aluminium, PVC ou bois. Parquets, dressings et aménagements sur mesure. Menuisier à Saint-Vincent-de-Tyrosse, sud des Landes.",
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
      { src: photos.dressingParquetChene, alt: "Dressing sur mesure à portes toute hauteur et parquet chêne" },
      { src: photos.porteFenetreBoisBlanche, alt: "Porte-fenêtre bois blanche à petits carreaux avec imposte, façade en pierre" },
      { src: photos.fenetreAluminiumVoletRoulant, alt: "Fenêtre aluminium anthracite avec volet roulant intégré" },
      { src: photos.porteAluminiumAtelier, alt: "Porte d'entrée aluminium noire, vitrage style atelier" },
      { src: photos.parquetInterieur, alt: "Pose de parquet dans une pièce de vie" },
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
    seoTitle: "Terrasse bois et composite sur mesure à Saint-Vincent-de-Tyrosse",
    seoDescription: "Création de terrasses en bois naturel ou composite, plage de piscine, terrasse sur plots. Étude du terrain, structure, finitions. Sud des Landes : Tyrosse, Capbreton, Hossegor, Seignosse.",
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
      { src: photos.terrassePiscine, alt: "Terrasse bois autour d'une piscine, arbre intégré" },
      { src: photos.terrassePiscine2, alt: "Terrasse bois exotique avec margelles piscine" },
      { src: photos.terrassePergolaBois, alt: "Terrasse bois devant la maison, sous pergola bois" },
      { src: photos.bardageClotureBois, alt: "Terrasse bois sur deux niveaux avec spa" },
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
    seoTitle: "Pergola bioclimatique aluminium ou pergola bois sur mesure, Landes",
    seoDescription: "Pose de pergolas bioclimatiques à lames orientables et de pergolas bois, adossées ou autoportées. Options LED, stores, motorisation. Saint-Vincent-de-Tyrosse et sud des Landes.",
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
      { src: photos.pergolaBioclimatique, alt: "Pergola bioclimatique aluminium à lames orientables" },
      { src: photos.terrassePergolaBois, alt: "Pergola bois adossée à la façade, sur terrasse bois" },
      { alt: "Pergola autoportée" },
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
    seoTitle: "Bardage bois et composite de façade à Saint-Vincent-de-Tyrosse",
    seoDescription: "Pose de bardage bois naturel, composite ou rapporté isolant sur façade. Claire-voie ou jointif, vertical ou horizontal. Artisan dans le sud des Landes, expertise gratuite et devis sous 48 h.",
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
      { src: photos.bardageClotureBois, alt: "Bardage bois vertical sur façade, clôture bois assortie" },
      { src: photos.abriBoisBardage, alt: "Bardage bois vertical sur abri, portes intégrées et ferrures noires" },
      { src: photos.clotureBoisClaireVoie, alt: "Habillage bois à claire-voie" },
    ],
    faq: [
      { q: "Le bardage bois demande-t-il beaucoup d'entretien ?", a: "Non traité, il grise uniformément et reste protégé. Pour garder la teinte d'origine, un saturateur tous les 2 à 3 ans suffit." },
    ],
  },
]

export const realisations: Img[] = [
  { src: photos.terrassePiscine, alt: "Terrasse bois autour d'une piscine" },
  { src: photos.clotureBoisPoteauxAlu, alt: "Clôture bois sur poteaux aluminium" },
  { src: photos.portailAcierVert, alt: "Portail battant acier vert" },
  { src: photos.dressingParquetChene, alt: "Dressing sur mesure et parquet chêne" },
  { src: photos.pergolaBioclimatique, alt: "Pergola bioclimatique aluminium" },
  { src: photos.portillonClotureAluminium, alt: "Portillon et clôture aluminium anthracite" },
  { src: photos.bardageClotureBois, alt: "Bardage et clôture bois" },
  { src: photos.clotureBoisClaireVoie, alt: "Clôture bois à claire-voie" },
  { src: photos.terrassePergolaBois, alt: "Terrasse bois et pergola bois" },
  { src: photos.clotureAluminium, alt: "Clôture aluminium sur muret" },
]
