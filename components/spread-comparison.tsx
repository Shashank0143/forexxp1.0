"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getFromStorage, STORAGE_KEYS } from "@/lib/localStorage"

export default function SpreadComparison() {
  const [selectedPair, setSelectedPair] = useState("EURUSD")
  const [spreadData, setSpreadData] = useState([])

  useEffect(() => {
    const defaultSpreads = [
      { broker: "FOREX.com", standard: 1.7, current: 1.7, change: 1.4, color: "red" },
      { broker: "AvaTrade", standard: 1.7, current: 1.7, change: 0.7, color: "green" },
      { broker: "ThinkMarkets", standard: 1.7, current: 1.7, change: 1.2, color: "red" },
      { broker: "FP Markets", standard: 1.7, current: 1.7, change: -0.9, color: "green" },
      { broker: "FXCM", standard: 1.7, current: 1.7, change: 1.5, color: "red" },
    ]
    setSpreadData(getFromStorage(STORAGE_KEYS.SPREAD_DATA, defaultSpreads))
  }, [])

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-base sm:text-lg">Real-time spread comparison EURUSD</CardTitle>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-xs sm:text-sm text-gray-600">Trading pairs</span>
            <Select value={selectedPair} onValueChange={setSelectedPair}>
              <SelectTrigger className="w-24 sm:w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EURUSD">EURUSD</SelectItem>
                <SelectItem value="GBPUSD">GBPUSD</SelectItem>
                <SelectItem value="USDJPY">USDJPY</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-xs sm:text-sm">Broker</th>
                <th className="text-center py-2 text-xs sm:text-sm">Standard</th>
                <th className="text-center py-2 text-xs sm:text-sm">Current</th>
                <th className="text-center py-2 text-xs sm:text-sm">Floating</th>
                <th className="text-center py-2 text-xs sm:text-sm hidden sm:table-cell">Long Position</th>
                <th className="text-center py-2 text-xs sm:text-sm hidden sm:table-cell">Short Position</th>
              </tr>
            </thead>
            <tbody>
              {spreadData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium text-xs sm:text-sm">{item.broker}</td>
                  <td className="text-center text-xs sm:text-sm">{item.standard}</td>
                  <td className="text-center text-xs sm:text-sm">{item.current}</td>
                  <td className="text-center text-xs sm:text-sm">
                    <span className={`${item.color === "green" ? "text-green-600" : "text-red-600"}`}>
                      {item.change > 0 ? "+" : ""}
                      {item.change}
                    </span>
                  </td>
                  <td className="text-center text-xs sm:text-sm hidden sm:table-cell">0.00</td>
                  <td className="text-center text-xs sm:text-sm hidden sm:table-cell">0.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:underline text-xs sm:text-sm">View More ↓</button>
        </div>
      </CardContent>
    </Card>
  )
}
