// __root.tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/layout/Header'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotFoundRoute, 
  pendingComponent: Loading, // Add this
})
function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

function NotFoundRoute(){
    return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50 min-h-[60vh] flex items-center pt-32">
        <div className="container-custom section-padding text-center">
          <h1 className="mb-4 font-playfair text-6xl md:text-8xl font-bold text-gray-900">
            404
          </h1>
          <h2 className="mb-6 font-playfair text-2xl md:text-3xl font-bold text-gray-700">
            Page Not Found
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-gray-600 text-lg">
            The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary">
              Go Home
            </a>
            <a href="/products" className="btn-outline">
              View Products
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

function Layout(){
    return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}