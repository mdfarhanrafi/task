"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    title: "NEW FASHION\n& MODERN\nEYEGLASSES",
    buttonText: "Discover Models",
    image: "/heroImage1.png",
    bgColor: "from-blue-50 to-white",
  },
  {
    id: 2,
    title: "PREMIUM\nDESIGNER\nCOLLECTION",
    buttonText: "Shop Collection",
    image: "/heroImage2.png",
    bgColor: "from-gray-50 to-white",
  },
  {
    id: 3,
    title: "EXCLUSIVE\nSUMMER\nSTYLES",
    buttonText: "View Styles",
    image: "/heroImage1.png",
    bgColor: "from-amber-50 to-white",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden w-10/12 mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className={`w-full flex-shrink-0 bg-gradient-to-r ${item.bgColor} p-10 md:p-6 flex flex-col md:flex-row items-center`}
          >
            <div className="md:w-1/2 mb-6 md:mb-0 p-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 whitespace-pre-line">{item.title}</h1>
              <Button className="bg-gray-900 hover:bg-black text-white rounded-md px-6">{item.buttonText}</Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={item.image || "/placeholder.svg"}
                alt="Eyeglasses"
                width={400}
                height={300}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-gray-800" : "bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
