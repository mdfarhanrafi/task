import { Search, ShoppingCart, Heart, User, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CategoryGrid from "@/components/category-grid"
import BrandSlider from "@/components/brand-slider"
import Newsletter from "@/components/newsletter"
import CategoriesDropdown from "@/components/categories-dropdown"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b py-1.5 px-4 md:px-8 text-xs flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>Find Store</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <span>service@trynow.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>English</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <div className="flex items-center gap-1">
            <span>USD</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-blue-500">try</span>
            <span>Now</span>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative">
            <div className="flex">
              <Button
                variant="outline"
                className="rounded-l-md rounded-r-none border-r-0 bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                All Categories <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <input
                type="text"
                placeholder="Search for products"
                className="flex-1 py-2 px-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Button className="rounded-l-none rounded-r-md bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white border-y px-4 md:px-8 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CategoriesDropdown />

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600 flex items-center">
                Shop <ChevronDown className="ml-1 h-3 w-3" />
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600 flex items-center">
                Eyeglasses <ChevronDown className="ml-1 h-3 w-3" />
              </a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">
                About Us
              </a>
            </nav>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded">
              <span className="text-red-500">Get 30% discount</span>
              <span>on your first purchase</span>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Eyeglasses Categories */}
        <div className="py-8 px-4 md:px-8">
          <h2 className="text-xl font-semibold mb-6 text-center">Eyeglasses Categories</h2>
          <CategoryGrid />
        </div>

        {/* Flash Sale */}
        <div className="py-8 px-4 md:px-8 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-3 md:mb-0">Flash Sale</h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center gap-2 p-4">
              <span className="text-sm font-medium">Deal of The Day</span>
              <span className="text-sm">End in</span>
              <div className="flex gap-1">
                <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">18</span>
                <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">45</span>
                <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">02</span>
                <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">56</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ProductCard title="Sport Eyeglasses" price={39.99} rating={4.5} reviews={12} tag="20% Off" />
              <ProductCard title="Retro Eyeglasses" price={49.99} rating={4.8} reviews={24} tag="20% Off" />
              <ProductCard title="Pilot Eyeglasses" price={59.99} rating={4.7} reviews={18} tag="20% Off" />
              <ProductCard title="Ray-Ban Eyeglasses" price={79.99} rating={4.9} reviews={36} tag="20% Off" />
            </div>

            <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* All Product */}
        <div className="py-8 px-4 md:px-8">
          <h2 className="text-xl font-semibold mb-6 text-center">All Product</h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ProductCard title="Fashion Eyeglasses" price={45.99} rating={4.6} reviews={15} tag="20% Off" />
              <ProductCard title="Sport Eyeglasses" price={55.99} rating={4.7} reviews={22} tag="20% Off" />
              <ProductCard title="Tint Eyeglasses" price={65.99} rating={4.8} reviews={19} tag="20% Off" />
              <ProductCard title="Modern Eyeglasses" price={75.99} rating={4.9} reviews={28} tag="20% Off" />
            </div>

            <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Best Selling */}
        <div className="py-8 px-4 md:px-8 bg-gray-50">
          <h2 className="text-xl font-semibold mb-6 text-center">Best Selling</h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ProductCard title="Vintage Eyeglasses" price={42.99} rating={4.7} reviews={32} />
              <ProductCard title="Basic Eyeglasses" price={35.99} rating={4.5} reviews={28} />
              <ProductCard title="Wayfarer Eyeglasses" price={55.99} rating={4.8} reviews={42} />
              <ProductCard title="Rimless Eyeglasses" price={65.99} rating={4.6} reviews={24} />
            </div>

            <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Discounted Offer */}
        <div className="py-8 px-4 md:px-8">
          <h2 className="text-xl font-semibold mb-6 text-center">Discounted Offer</h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ProductCard
                title="Slim Eyeglasses"
                price={29.99}
                oldPrice={49.99}
                rating={4.3}
                reviews={18}
                tag="40% Off"
              />
              <ProductCard
                title="Aviator Eyeglasses"
                price={39.99}
                oldPrice={59.99}
                rating={4.5}
                reviews={24}
                tag="30% Off"
              />
              <ProductCard
                title="Elegant Eyeglasses"
                price={45.99}
                oldPrice={69.99}
                rating={4.7}
                reviews={32}
                tag="35% Off"
              />
              <ProductCard
                title="Hello Kitty Eyeglasses"
                price={49.99}
                oldPrice={79.99}
                rating={4.6}
                reviews={28}
                tag="40% Off"
              />
            </div>

            <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* New Arrival */}
        <div className="py-8 px-4 md:px-8 bg-gray-50">
          <h2 className="text-xl font-semibold mb-6 text-center">New Arrival</h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ProductCard title="Matte Eyeglasses" price={52.99} rating={4.4} reviews={8} tag="New" />
              <ProductCard title="Latest Eyeglasses" price={58.99} rating={4.5} reviews={6} tag="New" />
              <ProductCard title="Line Art Eyeglasses" price={62.99} rating={4.6} reviews={4} tag="New" />
              <ProductCard title="Luxury Rimmed Eyeglasses" price={72.99} rating={4.7} reviews={5} tag="New" />
            </div>

            <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Top Brands */}
        <div className="py-8 px-4 md:px-8">
          <h2 className="text-xl font-semibold mb-6 text-center">Top Brands</h2>
          <BrandSlider />
        </div>

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-blue-400">try</span>
                <span>Now</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span>123 Richmond St, Patchogue</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>+1-555-555-5555</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>service@trynow.com</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Men's Eyeglasses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Women's Eyeglasses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Baby Eyeglasses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Young Fashion
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Policies</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 TryNow Eyeglasses Shop. All rights reserved.</p>
            <div className="flex gap-2 mt-4 md:mt-0">
              <img src="/placeholder.svg?height=30&width=30" alt="Visa" className="h-6" />
              <img src="/placeholder.svg?height=30&width=30" alt="Mastercard" className="h-6" />
              <img src="/placeholder.svg?height=30&width=30" alt="PayPal" className="h-6" />
              <img src="/placeholder.svg?height=30&width=30" alt="Apple Pay" className="h-6" />
              <img src="/placeholder.svg?height=30&width=30" alt="Google Pay" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
