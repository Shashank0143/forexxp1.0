"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState("Home")
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Forex Brokers", href: "/search" },
    { name: "Forex Events", href: "/events" },
    { name: "Forex Market", href: "/market" },
    { name: "Broker Rankings", href: "/ranking" },
    { name: "Regulators", href: "/regulators" },
    { name: "VPS", href: "/vps", hasDropdown: true },
    { name: "Live", href: "/live" },
    { name: "Community", href: "/community" },
  ]

  return (
    <div className="bg-[#004AAD] border-b sticky top-0 z-40">
      <div className="container mx-auto px-8 sm:px-24">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <div className="flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 py-3 px-2 text-white hover:bg-[#0056c4] font-medium text-sm lg:text-base transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>VPS Standard</DropdownMenuItem>
                      <DropdownMenuItem>VPS Ultra</DropdownMenuItem>
                      <DropdownMenuItem>VPS Pro</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-3 px-2 font-medium transition-colors text-sm lg:text-base ${
                      activeTab === item.name ? "text-white border-b-2 border-white" : "text-white hover:bg-[#0056c4]"
                    }`}
                    onClick={() => setActiveTab(item.name)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="font-medium text-white">Menu</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="text-white hover:bg-[#0056c4] p-2"
          >
            {isMobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileNavOpen && (
          <div className="md:hidden border-t border-[#0056c4] bg-[#004AAD]">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 px-4 text-white hover:bg-[#0056c4] font-medium">
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>VPS Standard</DropdownMenuItem>
                        <DropdownMenuItem>VPS Ultra</DropdownMenuItem>
                        <DropdownMenuItem>VPS Pro</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2 px-4 font-medium transition-colors ${
                        activeTab === item.name ? "text-white bg-[#0056c4]" : "text-white hover:bg-[#0056c4]"
                      }`}
                      onClick={() => {
                        setActiveTab(item.name)
                        setIsMobileNavOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
