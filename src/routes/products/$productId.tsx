import { createFileRoute, notFound } from '@tanstack/react-router'
import { ProductDetail } from '@/components/sections/product-detail'
import { products } from '@/data/products'

export const Route = createFileRoute('/products/$productId')({
  component: ProductPage,
  staticData: {
    headerText: "dark",
  },
  loader: ({ params }) => {
    const product = products.find(p => p.id === params.productId)
    if (!product) {
      throw notFound()
    }
    return { product }
  },
})

function ProductPage() {
  const { product } = Route.useLoaderData()

  return (
    <main className="min-h-screen">
      <ProductDetail product={product} />
    </main>
  )
}