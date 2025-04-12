import Image from "next/image"
import Link from "next/link"


export default function BrandLogo({ name, image }) {
  return (
    <Link href="#" className="block">
      <div className="h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={120}
          height={40}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </Link>
  )
}
