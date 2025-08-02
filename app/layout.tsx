import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TopHeader from "@/components/top-header"
import NavigationBar from "@/components/navigation-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ForexXP - Global Forex Broker Analysis & Reviews Platform",
  description:
    "Compare and analyze forex brokers worldwide with ForexXP. Expert reviews, real-time spreads, regulatory information, and trading platform analysis.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
