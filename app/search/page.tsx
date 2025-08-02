"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegulators, setSelectedRegulators] = useState([])
  const [allMembers, setAllMembers] = useState(true)
  const [fullDisclosure, setFullDisclosure] = useState(false)
  const [brokers, setBrokers] = useState([])
  const [filteredBrokers, setFilteredBrokers] = useState([])

  const regulators = [
    "All Regulators",
    "Securities and Futures",
    "Australia Securities & Investment",
    "Securities and Exchange",
    "Financial Services Authority",
    "National Commission",
    "Financial Conduct Authority",
    "Cyprus Securities and Exchange",
    "Federal Financial Supervisory",
    "The Australian Securities",
    "Dubai Financial Services",
    "Financial Markets Authority",
    "Swiss Financial Market",
    "National Bank of the Republic",
    "Financial Sector Conduct",
    "Trade and Development",
    "Abu Dhabi Global Market",
    "Securities and Futures",
    "Canadian Investment Regulatory",
    "Central Bank of Ireland",
    "Hong Kong Gold Silver",
    "Bank of Lithuania",
    "Securities and Exchange",
    "Financial Conduct Authority",
    "Monetary Authority of Singapore",
    "Maldl International Services",
    "Financial Crime Enforcement",
    "Czech National Bank",
    "The Securities Commission",
    "Labuan Financial Services",
    "Commission Nationale des",
    "Federal Reserve Exchange",
    "The Financial Services",
    "Malta Financial Services",
    "Belize International Services",
    "Capital Markets Authority",
    "The Capital Markets Authority",
    "Indonesia Commodity",
    "National Futures Association",
    "The Capital Markets Authority",
    "Portuguese Securities",
    "Vanuatu Financial Services",
    "The Securities Commission",
    "Cyprus Islands Monetary",
    "Financial Services Commission",
    "Financial Transactions",
    "The Capital Markets Commission",
  ]

  useEffect(() => {
    // Load brokers with more detailed information matching the image
    const defaultBrokers = [
      {
        id: "1",
        name: "AvaTrade",
        logo: "/placeholder.svg?height=40&width=80&text=AVATRADE",
        country: "Ireland",
        flag: "🇮🇪",
        years: "15-20 years",
        environment: "AA",
        score: 9.49,
        regulations: [
          { type: "ASC Market Maker (MM)", status: "Regulated" },
          { type: "FCA Market Maker (MM)", status: "Regulated" },
        ],
        licenseNumber: "C53877",
        established: 2006,
        regulatoryBodies: ["Securities and Futures", "Financial Conduct Authority"],
      },
      {
        id: "2",
        name: "FXCM",
        logo: "/placeholder.svg?height=40&width=80&text=FXCM",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "Above 20 years",
        environment: "AA",
        score: 9.34,
        regulations: [
          { type: "FCA Market Maker (MM)", status: "Regulated" },
          { type: "ASIC Market Maker (MM)", status: "Regulated" },
        ],
        licenseNumber: "217689",
        established: 1999,
        regulatoryBodies: ["Financial Conduct Authority", "Australia Securities & Investment"],
      },
      {
        id: "3",
        name: "STARTTRADER",
        logo: "/placeholder.svg?height=40&width=80&text=STAR",
        country: "Australia",
        flag: "🇦🇺",
        years: "10-15 years",
        environment: "AA",
        score: 9.22,
        regulations: [
          { type: "ASC Market Maker (MM)", status: "Regulated" },
          { type: "FCA Financial Service", status: "Regulated" },
        ],
        licenseNumber: "448002",
        established: 2015,
        regulatoryBodies: ["Australia Securities & Investment", "Financial Conduct Authority"],
      },
      {
        id: "4",
        name: "IC Markets Global",
        logo: "/placeholder.svg?height=40&width=80&text=IC",
        country: "Australia",
        flag: "🇦🇺",
        years: "15-20 years",
        environment: "AAA",
        score: 9.1,
        regulations: [
          { type: "ASC Market Maker (MM)", status: "Regulated" },
          { type: "CySEC Market Maker (MM)", status: "Regulated" },
        ],
        licenseNumber: "335692",
        established: 2007,
        regulatoryBodies: ["Australia Securities & Investment", "Cyprus Securities and Exchange"],
      },
      {
        id: "5",
        name: "XM",
        logo: "/placeholder.svg?height=40&width=80&text=XM",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "10-15 years",
        environment: "AAA",
        score: 9.1,
        regulations: [
          { type: "FCA Market Maker (MM)", status: "Regulated" },
          { type: "CySEC Market Maker (MM)", status: "Regulated" },
        ],
        licenseNumber: "705428",
        established: 2009,
        regulatoryBodies: ["Financial Conduct Authority", "Cyprus Securities and Exchange"],
      },
      {
        id: "6",
        name: "EC Markets",
        logo: "/placeholder.svg?height=40&width=80&text=EC",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "10-15 years",
        environment: "C",
        score: 9.07,
        regulations: [{ type: "ASC Market Maker (MM)", status: "Regulated" }],
        licenseNumber: "784312",
        established: 2010,
        regulatoryBodies: ["Australia Securities & Investment"],
      },
      {
        id: "7",
        name: "Exness",
        logo: "/placeholder.svg?height=40&width=80&text=exness",
        country: "Cyprus",
        flag: "🇨🇾",
        years: "10-15 years",
        environment: "A",
        score: 9.01,
        regulations: [
          { type: "FCA Market Maker (MM)", status: "Regulated" },
          { type: "CySEC Market Maker (MM)", status: "Regulated" },
        ],
        licenseNumber: "178603",
        established: 2008,
        regulatoryBodies: ["Financial Conduct Authority", "Cyprus Securities and Exchange"],
      },
    ]

    setBrokers(defaultBrokers)
    setFilteredBrokers(defaultBrokers)
  }, [])

  useEffect(() => {
    let filtered = [...brokers]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (broker) =>
          broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          broker.regulatoryBodies.some((body) => body.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Regulator filter
    if (selectedRegulators.length > 0 && !selectedRegulators.includes("All Regulators")) {
      filtered = filtered.filter((broker) =>
        selectedRegulators.some((regulator) => broker.regulatoryBodies.includes(regulator)),
      )
    }

    setFilteredBrokers(filtered)
  }, [brokers, searchTerm, selectedRegulators])

  const handleRegulatorChange = (regulator, checked) => {
    if (regulator === "All Regulators") {
      if (checked) {
        setSelectedRegulators(["All Regulators"])
      } else {
        setSelectedRegulators([])
      }
    } else {
      if (checked) {
        const newSelected = selectedRegulators.filter((r) => r !== "All Regulators")
        setSelectedRegulators([...newSelected, regulator])
      } else {
        setSelectedRegulators(selectedRegulators.filter((reg) => reg !== regulator))
      }
    }
  }

  const handleReset = () => {
    setSearchTerm("")
    setSelectedRegulators([])
    setAllMembers(true)
    setFullDisclosure(false)
  }

  const getEnvironmentColor = (env) => {
    switch (env) {
      case "AAA":
        return "bg-green-600 text-white"
      case "AA":
        return "bg-green-500 text-white"
      case "A":
        return "bg-yellow-500 text-white"
      case "B":
        return "bg-orange-500 text-white"
      case "C":
        return "bg-red-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getScoreColor = (score) => {
    if (score >= 9.0) return "text-green-600"
    if (score >= 8.0) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-50 md:px-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Filters */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-4 h-fit">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filter by regulator</h3>
                <div className="text-sm text-gray-500">Selected: Conditions</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReset}
                  className="text-blue-600 hover:text-blue-700 p-1"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>

              {/* Top Options */}
              <div className="mb-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="all-members" checked={allMembers} onCheckedChange={setAllMembers} />
                  <label htmlFor="all-members" className="text-sm">
                    All members
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="full-disclosure" checked={fullDisclosure} onCheckedChange={setFullDisclosure} />
                  <label htmlFor="full-disclosure" className="text-sm text-blue-600">
                    Full disclosure
                  </label>
                </div>
              </div>

              {/* Regulators List */}
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {regulators.map((regulator) => (
                  <div key={regulator} className="flex items-center space-x-2 py-1">
                    <Checkbox
                      id={regulator}
                      checked={selectedRegulators.includes(regulator)}
                      onCheckedChange={(checked) => handleRegulatorChange(regulator, checked)}
                      className={regulator === "All Regulators" ? "border-green-500" : ""}
                    />
                    <label
                      htmlFor={regulator}
                      className={`text-sm cursor-pointer ${
                        regulator === "All Regulators"
                          ? "font-medium text-green-600"
                          : selectedRegulators.includes(regulator)
                            ? "text-green-600"
                            : "text-gray-700"
                      }`}
                    >
                      {regulator}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search brokers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {filteredBrokers.map((broker) => (
                <Card key={broker.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      {/* Left Side - Broker Info */}
                      <div className="flex items-start space-x-4 flex-1">
                        {/* Logo */}
                        <div className="w-20 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                          <img
                            src={broker.logo || "/placeholder.svg"}
                            alt={broker.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>

                        {/* Broker Details */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{broker.name}</h3>
                            <span className="text-lg">{broker.flag}</span>
                            <span className="text-sm text-gray-600">{broker.country}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-600">{broker.years}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-600">Environment</span>
                            <Badge className={`text-xs px-2 py-1 ${getEnvironmentColor(broker.environment)}`}>
                              {broker.environment}
                            </Badge>
                          </div>

                          {/* Regulations */}
                          <div className="space-y-1 mb-3">
                            {broker.regulations.map((regulation, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">{regulation.type}</span>
                                <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                  {regulation.status}
                                </Badge>
                              </div>
                            ))}
                          </div>

                          {/* License Number */}
                          <div className="text-xs text-gray-500">Regulatory License Number: {broker.licenseNumber}</div>
                        </div>
                      </div>

                      {/* Right Side - Score */}
                      <div className="text-right ml-4">
                        <div className={`text-4xl font-bold ${getScoreColor(broker.score)}`}>{broker.score}</div>
                        <div className="text-sm text-gray-500">Score</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
                      <Link href={`/broker/${broker.id}`}>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          View Profile
                        </Button>
                      </Link>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Compare
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredBrokers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No brokers found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters.</p>
                <Button onClick={handleReset}>Clear All Filters</Button>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-6 text-center text-sm text-gray-500">
              Showing {filteredBrokers.length} of {brokers.length} brokers
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
