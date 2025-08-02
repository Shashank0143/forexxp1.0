"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, AlertTriangle } from "lucide-react"
import { getFromStorage, STORAGE_KEYS } from "@/lib/localStorage"

export default function RightsProtection() {
  const [cases, setCases] = useState([])
  const [stats, setStats] = useState({
    totalAmount: "$65,761,416",
    peopleServed: "15,124",
  })

  useEffect(() => {
    const defaultCases = [
      {
        id: "1",
        company: "Headway",
        amount: "",
        status: "Unable to withdraw my deposit",
        description:
          "Unable to withdraw my deposit. I tried to withdraw the funds but the broker does not allow me to withdraw the funds. They keep asking for more money to withdraw the funds.",
        date: "2024-01-15",
        type: "withdrawal",
      },
      {
        id: "2",
        company: "ParkMoney",
        amount: "",
        status: "unable to withdraw my deposit",
        description:
          "unable to withdraw my deposit. I tried to withdraw the funds but the broker does not allow me to withdraw the funds. They keep asking for more money to withdraw the funds.",
        date: "2024-01-14",
        type: "withdrawal",
      },
      {
        id: "3",
        company: "IFEXCAPITAL",
        amount: "",
        status: "IFEX IS A FRAUD COMPANY",
        description:
          "IFEX IS A FRAUD COMPANY. BEWARE OF THIS SCAMMER. They cheat you by taking money and then close the account. They never let you withdraw your money.",
        date: "2024-01-13",
        type: "fraud",
      },
      {
        id: "4",
        company: "Succedo Markets",
        amount: "",
        status: "Scam",
        description:
          "Scam. I made the ForexXP account with the intention to withdraw my money from the broker but they keep asking for more money.",
        date: "2024-01-12",
        type: "scam",
      },
    ]
    setCases(getFromStorage(STORAGE_KEYS.PROTECTION_CASES, defaultCases))
  }, [])

  const getStatusColor = (type) => {
    switch (type) {
      case "withdrawal":
        return "bg-[#004AAD]/10 text-[#004AAD]"
      case "scam":
        return "bg-red-100 text-red-800"
      case "fraud":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-base sm:text-lg flex items-center">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-600" />
            Rights Protection Center
          </CardTitle>
          <Button className="bg-[#004AAD] hover:bg-[#003a8c] text-sm">Exposure</Button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
            <div>
              <div className="text-xs sm:text-sm text-gray-600">Amount reached within one month</div>
              <div className="text-lg sm:text-2xl font-bold text-green-600">{stats.totalAmount}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#004AAD]" />
            <div>
              <div className="text-xs sm:text-sm text-gray-600">Number of People Reached</div>
              <div className="text-lg sm:text-2xl font-bold text-[#004AAD]">{stats.peopleServed}</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {cases.map((case_) => (
            <div key={case_.id} className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded flex items-center justify-center text-xs sm:text-sm">
                    {case_.company.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm">{case_.company}</div>
                    <div className="text-xs text-gray-500">{case_.date}</div>
                  </div>
                </div>
                <Badge variant="secondary" className={`${getStatusColor(case_.type)} text-xs`}>
                  {case_.type}
                </Badge>
              </div>
              <div className="text-xs sm:text-sm font-medium mb-2 line-clamp-2">{case_.status}</div>
              <div className="text-xs text-gray-600 line-clamp-3">{case_.description}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
