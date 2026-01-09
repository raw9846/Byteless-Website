import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/hero'
import { FeaturedWork } from '@/components/sections/featured-work'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/layout/Footer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () =>
    (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <ContactSection />
    </main>
  )
})