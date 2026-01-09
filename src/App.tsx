import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/hero'
import { FeaturedWork } from '@/components/sections/featured-work'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/layout/Footer'

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedWork />
      <ContactSection />
      <Footer />
    </main>
  )
}