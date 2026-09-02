import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

/* index.html contient des balises SEO statiques (description, Open Graph, canonical) pour les robots
   qui n'exécutent pas JavaScript. Une fois l'application chargée, chaque page fournit les siennes
   via <Seo /> : on retire donc les statiques pour éviter les doublons. */
document.head
  .querySelectorAll('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], title')
  .forEach((el) => el.remove())

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
