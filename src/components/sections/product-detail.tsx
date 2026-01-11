import { Link } from '@tanstack/react-router'
import {Slideshow} from '@/components/Slideshow'
import Product from '@/types/Product'
import { useLocation } from '@tanstack/react-router'

interface Props {
  product: Product
}

export function ProductDetail({ product }: Props) {
  const location = useLocation()
  const location_with_path_name = location.pathname + "#contact"


  return (
    <section className="py-20 bg-gray-50 pt-32">
      <div className="container-custom section-padding">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary-500">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
         {/* Product img */}
          <div className="relative">
            {product.images.length > 1 ? (
              <Slideshow images={product.images} />
            ) : (
              <div className="overflow-hidden rounded-xl shadow-lg relative h-96 lg:h-[500px]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            )}
          </div>


          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="border border-primary-500 text-primary-600 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={location_with_path_name} className="btn-primary">
                Request Custom Quote
              </a>
              <Link to="/products" className="btn-outline">
                View All Products
              </Link>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
              Detailed Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Specs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
              Specifications
            </h3>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-gray-100 pb-2 text-sm"
                >
                  <span className="font-medium text-gray-700">
                    {key}
                  </span>
                  <span className="text-gray-600">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
