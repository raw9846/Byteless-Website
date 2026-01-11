import { Hero } from '@/components/sections/hero'
import { FeaturedWork } from '@/components/sections/featured-work'
import { ContactSection } from '@/components/sections/contact-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () =>
    (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <section id="contact">
      <ContactSection />
      </section>
    </main>
  )
})