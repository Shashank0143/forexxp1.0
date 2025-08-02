"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, Zap, Shield } from "lucide-react"

export default function VPSAds() {
  const vpsPlans = [
    {
      name: "ProStarket(MTS)",
      price: "USD 0.99",
      originalPrice: "USD 29.99/month",
      features: ["High Performance", "24/7 Support"],
      color: "bg-[#004AAD]",
      icon: <Server className="h-4 w-4 sm:h-6 sm:w-6" />,
    },
    {
      name: "NewsTradingMT5)",
      price: "USD 0.99",
      originalPrice: "USD 29.99/month",
      features: ["Fast Execution", "Low Latency"],
      color: "bg-[#0056c4]",
      icon: <Zap className="h-4 w-4 sm:h-6 sm:w-6" />,
    },
    {
      name: "TrendMaster",
      price: "USD 0.99",
      originalPrice: "USD 29.99/month",
      features: ["Secure Trading", "Advanced Tools"],
      color: "bg-[#004AAD]",
      icon: <Server className="h-4 w-4 sm:h-6 sm:w-6" />,
    },
    {
      name: "Fortress",
      price: "USD 0.99",
      originalPrice: "USD 29.99/month",
      features: ["Maximum Security", "Premium Support"],
      color: "bg-green-600",
      icon: <Shield className="h-4 w-4 sm:h-6 sm:w-6" />,
    },
  ]

  const vpsTypes = [
    {
      name: "VPS Ultra",
      description: "High-performance VPS for professional traders",
      color: "bg-red-500",
    },
    {
      name: "VPS Standard",
      description: "Reliable VPS for everyday trading",
      color: "bg-[#004AAD]",
    },
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* VPS Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {vpsTypes.map((vps, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className={`${vps.color} text-white p-3 sm:p-4 flex items-center justify-between`}>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{vps.name}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{vps.description}</p>
                </div>
                <Server className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-600 mb-2">Starting from</div>
                <div className="text-xl sm:text-2xl font-bold mb-4">$0.99/month</div>
                <Button className="w-full bg-[#004AAD] hover:bg-[#003a8c] text-white text-sm">Open for free</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* VPS Plans */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {vpsPlans.map((plan, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-3 sm:p-4">
              <div className={`${plan.color} text-white rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 inline-flex`}>
                {plan.icon}
              </div>
              <h3 className="font-bold text-xs sm:text-sm mb-2 line-clamp-2">{plan.name}</h3>
              <div className="mb-2">
                <div className="text-base sm:text-2xl font-bold text-green-600">{plan.price}</div>
                <div className="text-xs text-gray-500 line-through">{plan.originalPrice}</div>
              </div>
              <div className="space-y-1 mb-3 sm:mb-4">
                {plan.features.map((feature, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs block mb-1 border-[#004AAD] text-[#004AAD]">
                    {feature}
                  </Badge>
                ))}
              </div>
              <Button className="w-full text-xs bg-[#004AAD] hover:bg-[#003a8c]" size="sm">
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
