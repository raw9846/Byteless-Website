import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: () => (
    <main className="min-h-screen">
      <section className="py-20 container-custom">
        <h1 className="text-4xl font-playfair font-bold mb-6">Portfolio</h1>
        <p className="text-gray-600">Here you can show off case studies, screenshots, links or anything that represents your past work.</p>
      </section>
    </main>
  )
})
