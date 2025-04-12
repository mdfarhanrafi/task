"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

export default function CategoriesDropdown() {
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedStyles, setSelectedStyles] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState("")

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const toggleStyle = (style) => {
    setSelectedStyles((prev) => (prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]))
  }

  const toggleMaterial = (material) => {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
  }

  const brands = ["Ray-Ban", "Oakley", "Gucci", "Prada", "Police", "Boss", "Lacoste"]
  const styles = ["Round", "Square", "Oval", "Rectangle", "Cat Eye", "Aviator", "Wayfarer"]
  const materials = ["Metal", "Plastic", "Titanium", "Acetate", "Carbon Fiber"]
  const priceRanges = ["Under $50", "$50 - $100", "$100 - $200", "Over $200"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 mr-4">
          <span>Categories by Brand</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter Products</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Brands</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-56">
                {brands.map((brand) => (
                  <DropdownMenuItem key={brand} onSelect={(e) => e.preventDefault()}>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="text-sm cursor-pointer flex-1"
                        onClick={() => toggleBrand(brand)}
                      >
                        {brand}
                      </label>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Frame Styles</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-56">
                {styles.map((style) => (
                  <DropdownMenuItem key={style} onSelect={(e) => e.preventDefault()}>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`style-${style}`}
                        checked={selectedStyles.includes(style)}
                        onCheckedChange={() => toggleStyle(style)}
                      />
                      <label
                        htmlFor={`style-${style}`}
                        className="text-sm cursor-pointer flex-1"
                        onClick={() => toggleStyle(style)}
                      >
                        {style}
                      </label>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Materials</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-56">
                {materials.map((material) => (
                  <DropdownMenuItem key={material} onSelect={(e) => e.preventDefault()}>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`material-${material}`}
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={() => toggleMaterial(material)}
                      />
                      <label
                        htmlFor={`material-${material}`}
                        className="text-sm cursor-pointer flex-1"
                        onClick={() => toggleMaterial(material)}
                      >
                        {material}
                      </label>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Price Range</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-56">
                {priceRanges.map((range) => (
                  <DropdownMenuItem key={range} onSelect={(e) => e.preventDefault()}>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`price-${range}`}
                        checked={priceRange === range}
                        onCheckedChange={() => setPriceRange(priceRange === range ? "" : range)}
                      />
                      <label
                        htmlFor={`price-${range}`}
                        className="text-sm cursor-pointer flex-1"
                        onClick={() => setPriceRange(priceRange === range ? "" : range)}
                      >
                        {range}
                      </label>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="justify-center">
          <Button variant="default" size="sm" className="w-full">
            Apply Filters
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
