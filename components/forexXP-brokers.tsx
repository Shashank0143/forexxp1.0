"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Globe } from "lucide-react"
import { getFromStorage, STORAGE_KEYS } from "@/lib/localStorage"

export default function ForexXPBrokers() {
  const [brokers, setBrokers] = useState([])

  useEffect(() => {
    setBrokers(getFromStorage(STORAGE_KEYS.FOREXXP_BROKERS, []))
  }, [])

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">ForexXP Broker</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {brokers.map((broker) => (
          <Card key={broker.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="relative">
                  <img
                    src={broker.logo || "/placeholder.svg"}
                    alt={broker.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded border"
                  />
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                    {broker.score}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-base mb-1 truncate">{broker.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      {broker.regulation}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-600">
                    <div className="flex items-center space-x-1 mb-1">
                      <Globe className="h-3 w-3" />
                      <span>{broker.country}</span>
                      <span>•</span>
                      <span>Est. {broker.established}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Min Deposit:</span>
                  <span className="font-medium">${broker.minDeposit}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Max Leverage:</span>
                  <span className="font-medium">{broker.maxLeverage}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Platforms:</span>
                  <span className="font-medium">{broker.platforms.join(", ")}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {broker.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-[#004AAD] text-[#004AAD]">
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" className="text-xs bg-[#004AAD] hover:bg-[#003a8c]">
                  View Details
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white"
                >
                  Compare
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
