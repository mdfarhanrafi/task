import Image from "next/image"

export default function BrandSlider() {
  const brands = [
    { name: "Police", logo: "/POLIGE.png" },
    { name: "Ray-Ban", logo: "/Ray-bani.png"},
    { name: "Gucci", logo: "/GUCCI.png" },
    { name: "Boss", logo: "/BOSS.png" },
    { name: "Lacoste", logo: "/top.png" },
    { name: "Oakley", logo: "/top2.png" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mx-auto">
      {brands.map((brand, index) => (
        <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src={brand.logo || "/placeholder.svg"}
            alt={brand.name}
            width={100}
            height={50}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  )
}
