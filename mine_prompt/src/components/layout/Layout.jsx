import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export function Layout() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* global paper-grain overlay */}
      <div
        aria-hidden="true"
        className="bg-noise pointer-events-none fixed inset-0 z-[35]"
        style={{ opacity: 0.035 }}
      />
      <ScrollToTop />
      <Navbar />
      <main id="main" className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
