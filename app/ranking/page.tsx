"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("Rankings")
  const [rankings, setRankings] = useState([])

  const tabs = [
    "Rankings",
    "Brand Ranking",
    "Environment",
    "Popularity Ranking",
    "Frauds",
    "Spread Ranking",
    "Crude Oil",
  ]

  const forexXPExpressBrokers = [
    { name: "XM", icon: "🏢" },
    { name: "FXCM/Z", icon: "🏢" },
    { name: "Exness", icon: "🏢" },
    { name: "AvaTrade", icon: "🏢" },
    { name: "STARTTRADER", icon: "🏢" },
    { name: "FXTM", icon: "🏢" },
    { name: "FXCM", icon: "🏢" },
    { name: "IC Markets Global", icon: "🏢" },
    { name: "XPO Markets", icon: "🏢" },
    { name: "FBS", icon: "🏢" },
  ]

  useEffect(() => {
    // Load rankings data with more detailed information matching the image
    const defaultRankings = [
      {
        rank: 1,
        id: "1",
        name: "AvaTrade",
        logo: "/placeholder.svg?height=40&width=80&text=AVATRADE",
        country: "Ireland",
        flag: "🇮🇪",
        years: "15-20 years",
        score: 9.49,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2006,
        change: "up",
      },
      {
        rank: 2,
        id: "2",
        name: "FXCM",
        logo: "/placeholder.svg?height=40&width=80&text=FXCM",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "Above 20 years",
        score: 9.34,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 1999,
        change: "up",
      },
      {
        rank: 3,
        id: "3",
        name: "STARTTRADER",
        logo: "/placeholder.svg?height=40&width=80&text=STAR",
        country: "Australia",
        flag: "🇦🇺",
        years: "5-10 years",
        score: 9.22,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2015,
        change: "up",
      },
      {
        rank: 4,
        id: "4",
        name: "IC Markets Global",
        logo: "/placeholder.svg?height=40&width=80&text=IC",
        country: "Australia",
        flag: "🇦🇺",
        years: "15-20 years",
        score: 9.1,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2007,
        change: "up",
      },
      {
        rank: 5,
        id: "5",
        name: "XM",
        logo: "/placeholder.svg?height=40&width=80&text=XM",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "10-15 years",
        score: 9.1,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2009,
        change: "up",
      },
      {
        rank: 6,
        id: "6",
        name: "EC Markets",
        logo: "/placeholder.svg?height=40&width=80&text=EC",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "10-15 years",
        score: 9.07,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2010,
        change: "down",
      },
      {
        rank: 7,
        id: "7",
        name: "Exness",
        logo: "/placeholder.svg?height=40&width=80&text=exness",
        country: "Cyprus",
        flag: "🇨🇾",
        years: "10-15 years",
        score: 9.01,
        regulations: [{ type: "Regulated in United Kingdom", status: "Market Maker (MM)", color: "orange" }],
        established: 2008,
        change: "up",
      },
      {
        rank: 8,
        id: "8",
        name: "Trade Nation",
        logo: "/placeholder.svg?height=40&width=80&text=TN",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "5-10 years",
        score: 8.99,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2014,
        change: "up",
      },
      {
        rank: 9,
        id: "9",
        name: "GO Markets",
        logo: "/placeholder.svg?height=40&width=80&text=GO",
        country: "Australia",
        flag: "🇦🇺",
        years: "Above 20 years",
        score: 8.98,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2006,
        change: "up",
      },
      {
        rank: 10,
        id: "10",
        name: "MultiBank Group",
        logo: "/placeholder.svg?height=40&width=80&text=MB",
        country: "United Arab Emirates",
        flag: "🇦🇪",
        years: "10-15 years",
        score: 8.96,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2005,
        change: "up",
      },
      {
        rank: 11,
        id: "11",
        name: "capital.com",
        logo: "/placeholder.svg?height=40&width=80&text=capital",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "5-10 years",
        score: 8.93,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2016,
        change: "down",
      },
      {
        rank: 12,
        id: "12",
        name: "FP Markets",
        logo: "/placeholder.svg?height=40&width=80&text=FP",
        country: "Australia",
        flag: "🇦🇺",
        years: "15-20 years",
        score: 8.88,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2005,
        change: "down",
      },
      {
        rank: 13,
        id: "13",
        name: "MACRO MARKETS",
        logo: "/placeholder.svg?height=40&width=80&text=MACRO",
        country: "Australia",
        flag: "🇦🇺",
        years: "5-10 years",
        score: 8.85,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2017,
        change: "down",
      },
      {
        rank: 14,
        id: "14",
        name: "GTCFX",
        logo: "/placeholder.svg?height=40&width=80&text=GTCFX",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "5-10 years",
        score: 8.83,
        regulations: [{ type: "Regulated in United Kingdom", status: "Market Maker (MM)", color: "orange" }],
        established: 2015,
        change: "down",
      },
      {
        rank: 15,
        id: "15",
        name: "FBS",
        logo: "/placeholder.svg?height=40&width=80&text=FBS",
        country: "Cyprus",
        flag: "🇨🇾",
        years: "10-15 years",
        score: 8.79,
        regulations: [{ type: "Regulated in Australia", status: "Market Maker (MM)", color: "green" }],
        established: 2009,
        change: "down",
      },
    ]

    setRankings(defaultRankings)
  }, [])

  const getRegulationColor = (color) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-800 border-green-200"
      case "orange":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "red":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getScoreColor = (score) => {
    if (score >= 9.0) return "text-green-600"
    if (score >= 8.5) return "text-[#004AAD]"
    return "text-orange-600"
  }

  const getRankIcon = (rank) => {
    if (rank <= 3) {
      return <Trophy className="h-4 w-4 text-[#004AAD]" />
    }
    return <span className="text-sm font-bold text-gray-500">#{rank}</span>
  }

  return (
    <div className="min-h-screen bg-gray-50 md:px-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Broker Rankings</h1>

              {/* Tabs */}
              <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-[#004AAD] text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Info Text */}
              <p className="text-sm text-gray-600 mb-4">
                🔍 Here are the favourite rankings in India on ForexXP, which may vary by region.
              </p>
            </div>

            {/* Rankings List */}
            <div className="space-y-3">
              {rankings.map((broker) => (
                <Card key={broker.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      {/* Left Side - Broker Info */}
                      <div className="flex items-center space-x-4 flex-1">
                        {/* Rank */}
                        <div className="flex flex-col items-center min-w-[40px]">
                          {getRankIcon(broker.rank)}
                          <span className="text-xs text-gray-500 mt-1">{broker.rank}</span>
                        </div>

                        {/* Logo */}
                        <div className="w-16 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                          <img
                            src={broker.logo || "/placeholder.svg"}
                            alt={broker.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>

                        {/* Broker Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-bold text-gray-900">{broker.name}</h3>
                            <span className="text-lg">{broker.flag}</span>
                          </div>

                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                            <span>{broker.years}</span>
                            <span>•</span>
                            <span>{broker.country}</span>
                          </div>

                          {/* Regulations */}
                          <div className="space-y-1">
                            {broker.regulations.map((regulation, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <Badge variant="outline" className={`text-xs ${getRegulationColor(regulation.color)}`}>
                                  {regulation.type}
                                </Badge>
                                <span className="text-xs text-gray-500">{regulation.status}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Score */}
                      <div className="text-right ml-4 flex items-center space-x-3">
                        <div>
                          <div className={`text-3xl font-bold ${getScoreColor(broker.score)}`}>{broker.score}</div>
                          <div className="text-xs text-gray-500">Score</div>
                        </div>

                        {/* Change Indicator */}
                        <div className="flex flex-col items-center">
                          {broker.change === "up" ? (
                            <div className="text-green-500">▲</div>
                          ) : (
                            <div className="text-red-500">▼</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar - ForexXP Express */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-4 h-fit">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#004AAD] text-white px-2 py-1 rounded text-sm font-bold">ForexXP Express</div>
            </div>

            <div className="space-y-2">
              {forexXPExpressBrokers.map((broker, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                  <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center text-xs">
                    {broker.icon}
                  </div>
                  <span className="text-sm text-gray-700">{broker.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
