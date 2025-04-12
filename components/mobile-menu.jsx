"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b py-4">
            <span className="text-lg font-semibold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-6">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 px-4 text-sm font-semibold">Main Menu</h3>
                <div className="space-y-1">
                  <Link href="/" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/eyeglasses"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Eyeglasses
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    About Us
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="mb-2 px-4 text-sm font-semibold">Categories</h3>
                <div className="space-y-1">
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Men
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Women
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Baby
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Young Fashion
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="border-t py-4">
            <div className="flex flex-col space-y-3 px-4">
              <Link
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
