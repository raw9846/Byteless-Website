import { createFileRoute } from '@tanstack/react-router'
import { ProductsGrid } from '@/components/sections/products-grid'

export const Route = createFileRoute('/products/')({
  component: ProductsPage,
  staticData: {
    headerText: 'dark',
  },
})


function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gray-50 pt-32">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h1 className="mb-4 font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Work
            </h1>
            <p className="mx-auto max-w-2xl text-gray-600 text-lg">
              Explore our complete collection of premium embroidered pieces, 
              each crafted with meticulous attention to detail.
            </p>
          </div>
          <ProductsGrid />
        </div>
      </section>
    </main>
  )
}