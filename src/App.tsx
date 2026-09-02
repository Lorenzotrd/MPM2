import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/site/Layout"
import Home from "@/pages/Home"
import PrestationPage from "@/pages/PrestationPage"
import Engagements from "@/pages/Engagements"
import Contact from "@/pages/Contact"
import Mentions from "@/pages/Mentions"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="engagements" element={<Engagements />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mentions-legales" element={<Mentions />} />
          <Route path=":slug" element={<PrestationPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
