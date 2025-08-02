"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { getFromStorage, STORAGE_KEYS } from "@/lib/localStorage"

export default function FieldSurvey() {
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    const defaultSurveys = [
      {
        id: "1",
        title: "A Visit to RIFF in Canada – No Office Found",
        location: "Canada",
        country: "Canada",
        image: "/images/field-survey.jpg",
        status: "Completed",
        flag: "🇨🇦",
      },
      {
        id: "2",
        title: "A Visit to PML in UK – Finding No Office",
        location: "United Kingdom",
        country: "UK",
        image: "/images/field-survey.jpg",
        status: "Completed",
        flag: "🇬🇧",
      },
      {
        id: "3",
        title: "A Visit to Goldmoney Global in UK – Finding No Office",
        location: "United Kingdom",
        country: "UK",
        image: "/images/field-survey.jpg",
        status: "Completed",
        flag: "🇬🇧",
      },
    ]
    setSurveys(getFromStorage(STORAGE_KEYS.FIELD_SURVEYS, defaultSurveys))
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Ongoing":
        return "bg-blue-100 text-blue-800"
      case "Planned":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-lg">Field Survey</CardTitle>
          <button className="text-blue-600 hover:underline text-xs sm:text-sm">More</button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {surveys.map((survey) => (
            <div key={survey.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={survey.image || "/placeholder.svg"}
                  alt={survey.title}
                  className="w-full h-24 sm:h-32 object-cover"
                />
                <Badge className={`absolute top-2 right-2 ${getStatusColor(survey.status)} text-xs`}>Danger</Badge>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs flex items-center">
                  <span className="mr-1">{survey.flag}</span>
                  {survey.country}
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <h4 className="font-medium text-xs sm:text-sm mb-2 line-clamp-2">{survey.title}</h4>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{survey.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
