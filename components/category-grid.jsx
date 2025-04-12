import Image from "next/image"
import Link from "next/link"

export default function CategoryGrid() {
  const categories = [
    { name: "All Eyeglasses", image: "/heroImage1.png" },
    { name: "Men", image: "/heroImage2.png" },
    { name: "Women", image: "/heroImage1.png" },
    { name: "Baby", image: "/heroImage1.png" },
    { name: "Young Fashion", image: "/heroImage2.png" },
  ]
  return (
    <div className="grid w-10/12 mx-auto grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:row-span-2  bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="grid grid-rows-3">
          <div className="row-span-2 mx-auto">
          <Image
                src={"/heroImage1.png" || "/placeholder.svg"}
                alt={"eyglass"}
                width={300}
                height={200}
                className="object-cover"
              />
          </div>
          <div className="grid grid-cols-2 mx-auto gap-4 my-2">
             <Image
                src={"/heroImage1.png" || "/placeholder.svg"}
                alt={"eyglass"}
                width={100}
                height={100}
                className="object-cover"
              />
               <Image
                src={"/heroImage1.png"|| "/placeholder.svg"}
                alt={"eyglass"}
                width={100}
                height={100}
                className="object-cover"
              />
            
          </div>  

        </div>
       
      </div>
      
      {categories.slice(1).map((category, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
          <Link href="#" className="block">
            <div className="p-4 flex items-center gap-4 justify-center grid-cols-3">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={100}
                height={100}
                className="h-24 object-contain"
              />
               <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={100}
                height={100}
                className="h-24 object-contain"
              />
               <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={100}
                height={100}
                className="h-24 object-contain"
              />
            </div>
            <div className="p-2 text-center font-medium">{category.name}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}
