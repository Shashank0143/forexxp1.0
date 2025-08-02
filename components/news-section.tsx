"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
}

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState("Latest")
  const [news, setNews] = useState<NewsItem[]>([])

  const tabs = ["Latest", "Original", "Industry", "Broker", "Exposure", "WikiFX Survey"]

  useEffect(() => {
    // Load from localStorage or use mock data
    const savedNews = localStorage.getItem("newsItems")
    if (savedNews) {
      setNews(JSON.parse(savedNews))
    } else {
      const mockNews: NewsItem[] = [
        {
          id: "1",
          title: "Olymptrade Under Fire – Fraud Allegations and Investor Outrage",
          excerpt:
            "The popular binary options broker for Olymptrade has been under SCAM or continue to face fraud allegations and investor outrage. With investor complaints refusin...",
          category: "Exposure",
          date: "2022-07-23 18:16",
          image: "/placeholder.svg?height=80&width=120",
        },
        {
          id: "2",
          title: "CXM Direct is a serious FRAUD & SCAM",
          excerpt:
            "FRAUD FRAUD FRAUD!!! Stay far away from this broker. I was approached by an agent who introduced me to CXMDirect and became friend to gain my trust...",
          category: "Scam",
          date: "2022-06-23 07:09",
          image: "/placeholder.svg?height=80&width=120",
        },
        {
          id: "3",
          title: "Busted! 5 Brokers Blacklisted by the FCA",
          excerpt:
            "The FCA (Financial Conduct Authority) has warned people about unauthorised brokers —operating without a proper license. If a broker is unregistered, you have no...",
          category: "Exposure",
          date: "2022-07-23 17:49",
          image: "/placeholder.svg?height=80&width=120",
        },
        {
          id: "4",
          title: "Is the Forex Bonus a Genuine Perk or Just a Gimmick?",
          excerpt:
            "Have you received a forex bonus offer from a broker? Wondering whether it is a pure marketing ploy to make you a client? Does it have some sense? Forex...",
          category: "News",
          date: "2022-07-23 16:46",
          image: "/placeholder.svg?height=80&width=120",
        },
        {
          id: "5",
          title: "FXGise Review – A Trail of Scams, Poor Support & Misleading Stra...",
          excerpt:
            "FXGise, surprisingly, is not proving nice for forex traders all over. Traders have been requesting the company officials to allow them to withdraw their funds...",
          category: "Exposure",
          date: "2022-07-21 16:32",
          image: "/placeholder.svg?height=80&width=120",
        },
      ]
      setNews(mockNews)
      localStorage.setItem("newsItems", JSON.stringify(mockNews))
    }
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "exposure":
        return "bg-red-100 text-red-800"
      case "scam":
        return "bg-red-100 text-red-800"
      case "news":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex overflow-x-auto no-scrollbar space-x-4 sm:space-x-4 mb-2 sm:mb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 text-sm font-medium pb-2 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 flex-shrink-0">
            More →
          </Button>
        </div>

        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="flex space-x-3 p-3 hover:bg-gray-50 rounded">
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-20 h-16 object-cover rounded" />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm line-clamp-2 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2 mb-2">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
