"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getFromStorage, STORAGE_KEYS } from "@/lib/localStorage"

export default function RankingsSection() {
  const [rankings, setRankings] = useState({
    balance: [],
    totalLoss: [],
    stopOut: [],
  })

  useEffect(() => {
    setRankings(
      getFromStorage(STORAGE_KEYS.RANKINGS_DATA, {
        balance: [],
        totalLoss: [],
        stopOut: [],
      }),
    )
  }, [])

  const renderRankingTable = (data, title) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-sm">{title}</h4>
        <div className="flex space-x-2 text-xs text-gray-500">
          <span className="hidden sm:inline">30 days</span>
          <span className="hidden sm:inline">90 days</span>
          <span>6 months</span>
        </div>
      </div>
      {data.map((item) => (
        <div key={item.rank} className="flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <span className="w-4 sm:w-6 text-center font-medium text-sm">{item.rank}</span>
            <span className="text-base sm:text-lg">{item.flag}</span>
            <span className="font-medium text-xs sm:text-sm truncate">{item.broker}</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <span className="font-bold text-sm">{item.score}</span>
            <span className={`text-xs sm:text-sm ${item.change === "↑" ? "text-green-600" : "text-red-600"}`}>
              {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm sm:text-base">Balance Cost</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">{renderRankingTable(rankings.balance, "No Deposit Bonuses")}</CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm sm:text-base">Net Withdrawal Ranking</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">{renderRankingTable(rankings.totalLoss, "Net Withdrawal Bonuses")}</CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm sm:text-base">Rollover Cost</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">{renderRankingTable(rankings.stopOut, "Rollover Cost")}</CardContent>
      </Card>
    </div>
  )
}
