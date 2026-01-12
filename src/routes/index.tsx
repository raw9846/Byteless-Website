import { Hero } from '@/components/sections/hero'
import { FeaturedWork } from '@/components/sections/featured-work'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () =>
    (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
    </main>
  )
})