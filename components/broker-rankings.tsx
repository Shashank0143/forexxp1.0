"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import { getBrokerRankings } from "@/lib/localStorage"

export default function BrokerRankings() {
  const [brokers, setBrokers] = useState([])

  useEffect(() => {
    setBrokers(getBrokerRankings())
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "Regulated":
        return "bg-green-100 text-green-800"
      case "Warning":
        return "bg-[#004AAD]/10 text-[#004AAD]"
      case "Blacklisted":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-full">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#004AAD]" />
            <h2 className="text-base sm:text-lg font-bold">Rankings</h2>
          </div>
          <div className="flex space-x-1 sm:space-x-2">
            <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2 hover:bg-[#004AAD]/10">
              📊
            </Button>
            <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2 hover:bg-[#004AAD]/10">
              📋
            </Button>
            <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2 hover:bg-[#004AAD]/10">
              🏠
            </Button>
            <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2 hover:bg-[#004AAD]/10">
              📄
            </Button>
            <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2 hover:bg-[#004AAD]/10">
              ⭐
            </Button>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {brokers.map((broker) => (
            <div key={broker.id} className="flex items-center space-x-2 sm:space-x-3 p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center space-x-2 min-w-0 flex-1">
                <Badge variant="secondary" className={`${getStatusColor(broker.status)} text-xs px-1 py-0.5`}>
                  {broker.status}
                </Badge>
                <img
                  src={broker.logo || "/placeholder.svg"}
                  alt={broker.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-xs sm:text-sm truncate">{broker.name}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {broker.regulation} | {broker.years}
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="font-bold text-xs sm:text-sm text-[#004AAD]">{broker.score}</div>
                <div className="text-xs text-gray-500">Score</div>
              </div>

              <div className="text-center min-w-[24px] sm:min-w-[30px] flex-shrink-0">
                <div className="font-bold text-sm sm:text-lg">{broker.rank}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
