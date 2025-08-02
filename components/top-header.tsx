"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User, Globe, ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { addToSearchHistory } from "@/lib/localStorage"

export default function TopHeader() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = () => {
    if (searchTerm.trim()) {
      addToSearchHistory(searchTerm.trim())
      // Handle search logic here
      console.log("Searching for:", searchTerm)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-8 sm:px-24 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-[#004AAD] text-white px-2 py-1 rounded font-bold text-base sm:text-lg flex items-center">
              <span className="text-lg sm:text-xl">📈</span>
              <span className="ml-1">ForexXP</span>
            </div>
            <span className="hidden sm:block text-xs sm:text-sm text-gray-300">
              Global Forex Broker Analysis Platform
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Search forex brokers, reviews, and analysis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-white text-black pr-10 text-sm"
              />
              <Button
                size="sm"
                onClick={handleSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#004AAD] hover:bg-[#003a8c] text-white p-2"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#004AAD] hover:bg-white p-2">
              <User className="h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-[#004AAD] hover:bg-white px-2 py-1 rounded text-sm">
                <Globe className="h-4 w-4" />
                <span className="hidden lg:inline">English</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>中文</DropdownMenuItem>
                <DropdownMenuItem>日本語</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold text-sm px-3 py-2">
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="space-y-4 pt-4">
              {/* Mobile Search */}
              <div className="relative">
                <Input
                  placeholder="Search forex brokers, reviews, and analysis..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-white text-black pr-10"
                />
                <Button
                  size="sm"
                  onClick={handleSearch}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#004AAD] hover:bg-[#003a8c] text-white p-2"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-white hover:text-[#004AAD] hover:bg-white">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-[#004AAD] hover:bg-white px-2 py-1 rounded">
                      <Globe className="h-4 w-4" />
                      <span>EN</span>
                      <ChevronDown className="h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>English</DropdownMenuItem>
                      <DropdownMenuItem>中文</DropdownMenuItem>
                      <DropdownMenuItem>日本語</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button className="bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold">Download</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
