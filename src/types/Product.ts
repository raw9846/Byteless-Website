
export default interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  images: string[]
  thumbnail: string
  category: string
  features: string[]
  specifications: Record<string, string>
}
