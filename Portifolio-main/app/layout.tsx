import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import type React from "react" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Almeida- Full Stack",
  description: "Portfolio and professional work by Gabriel Almeida",
    generator: 'v0.dev'
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              <span>Gabriel</span>
              <span className="text-[#00ffdd] text-glow">Almeida</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-300 hover:text-[#00ffdd] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}



import './globals.css'
import { useEffect, useState } from "react" 

