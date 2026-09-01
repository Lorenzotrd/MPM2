# MPM Métal Portail & Menuiserie – site web

Stack : Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui (Radix) + React Router.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère /dist
npm run preview    # teste le build
```

## Structure

```
src/
  data/site.ts            tout le contenu du site (coordonnées, prestations, matériaux, FAQ, engagements)
  components/ui/          composants shadcn (button, card, tabs, accordion, sheet, select, input...)
  components/site/        header, footer, barre mobile, bandeau CTA, layout
  pages/                  Home, PrestationPage (une route par prestation), Engagements, Contact, Mentions
  index.css               thème : noir / or / blanc cassé + police Jost
public/logo-mpm.png       logo
```

## Pour modifier le contenu

Tout est dans `src/data/site.ts`. Ajouter une prestation = ajouter un objet dans `prestations`, la page et les liens sont créés automatiquement.

## Photos

Les photos sont dans `public/photos/` (optimisées, max 1800 px). Chaque prestation a un champ `images` dans `src/data/site.ts` (3 photos : la première sert de visuel principal partout). La galerie de l'accueil est la liste `realisations` en bas du même fichier. Pour ajouter une photo : la déposer dans `public/photos/` et ajouter `{ src: "/photos/nom.jpg", alt: "description" }`.

Manque encore : une vraie photo de portail (la page Portails utilise la clôture alu en attendant) et une photo de menuiserie extérieure.

## Formulaire de contact

Sans back-end : le bouton ouvre le client mail avec le message pré-rempli (voir `src/pages/Contact.tsx`). Pour recevoir les demandes sans passer par le client mail, brancher Formspree, Resend ou le module de l'hébergeur dans `onSubmit`.

## Déploiement

Vercel / Netlify : importer le dépôt, framework Vite, build `npm run build`, output `dist`. Le fichier `vercel.json` gère les routes SPA. Pour Netlify, le fichier `public/_redirects` fait la même chose.

## À compléter avant mise en ligne

- URL exacte du compte Instagram (`src/data/site.ts` → `company.instagram`)
- Mentions légales : SIRET, forme juridique, hébergeur (`src/pages/Mentions.tsx`)
- Photos de réalisations
