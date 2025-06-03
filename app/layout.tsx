import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Almeida- Full Stack",
  description: "Portfolio and professional work by Gabriel Almeida",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'
import { useEffect, useState } from "react" 

