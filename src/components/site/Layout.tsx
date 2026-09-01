import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { MobileBar } from "./MobileBar"

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <MobileBar />
    </div>
  )
}
