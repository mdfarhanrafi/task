import Image from "next/image"
import Link from "next/link"

export default function CategoryCard({ title, image, className = "" }) {
  return (
    <Link href="#" className={`block relative rounded-lg w-10/12 mx-auto overflow-hidden group ${className}`}>
      <div className="aspect-square bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
        <h3 className="text-lg font-medium text-center text-black">{title}</h3>
      </div>
    </Link>
  )
}
