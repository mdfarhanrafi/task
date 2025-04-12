import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TryNow - Eyeglasses Shop",
  description: "Find your perfect eyeglasses at TryNow",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
          {children}
      
      </body>
    </html>
  )
}
