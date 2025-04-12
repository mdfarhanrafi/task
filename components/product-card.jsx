import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export default function ProductCard({
  title,
  price,
  oldPrice,
  rating,
  reviews,
  image = "/ekta.jpg",
  tag,
}) {
  // Map product titles to specific images
  const imageMap = {
    "Sport Eyeglasses": "/ekta.jpg",
    "Retro Eyeglasses": "/ekta.jpg",
    "Pilot Eyeglasses": "/ekta.jpg",
    "Ray-Ban Eyeglasses": "/ekta.jpg",
    "Vintage Eyeglasses": "/ekta.jpg",
    "Basic Eyeglasses": "/ekta.jpg",
    "Wayfarer Eyeglasses": "/ekta.jpg",
    "Rimless Eyeglasses": "/ekta.jpg",
    "Slim Eyeglasses": "/ekta.jpg",
    "Aviator Eyeglasses": "/ekta.jpg",
    "Elegant Eyeglasses": "/ekta.jpg",
    "Hello Kitty Eyeglasses": "/ekta.jpg",
    "Matte Eyeglasses": "/ekta.jpg",
    "Latest Eyeglasses": "/ekta.jpg",
    "Line Art Eyeglasses": "/ekta.jpg",
    "Luxury Rimmed Eyeglasses": "/ekta.jpg",
    "Fashion Eyeglasses": "/ekta.jpg",
    "Tint Eyeglasses": "/ekta.jpg",
    "Modern Eyeglasses": "/ekta.jpg",
  }

  // Use the mapped image or fallback to the provided image
  const productImage = imageMap[title] || image

  return (
    <div className="bg-white w-10/12 mx-auto rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group relative">
      {tag && <Badge className="absolute top-2 left-2 z-10 bg-black text-white">{tag}</Badge>}

      <div className="relative h-60 overflow-hidden bg-gray-800 border-1 border-gray-300 rounded-t-full">
        <Image
          src={productImage || "/placeholder.svg"}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium mb-1">{title}</h3>

        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-medium">${price.toFixed(2)}</span>
            {oldPrice && <span className="text-xs text-gray-500 line-through ml-2">${oldPrice.toFixed(2)}</span>}
          </div>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
