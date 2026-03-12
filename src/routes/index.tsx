import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'

export const Route = createFileRoute('/')({
  component: () => (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* Additional sections (portfolio preview, testimonials, etc.) can go here */}
    </main>
  )
})
