"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { getFromStorage, STORAGE_KEYS } from "@/lib/localStorage"

export default function ExpoSection() {
  const [expoEvents, setExpoEvents] = useState([])

  useEffect(() => {
    setExpoEvents(getFromStorage(STORAGE_KEYS.EXPO_EVENTS, []))
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "Signing up":
        return "bg-green-100 text-green-800"
      case "Upcoming":
        return "bg-blue-100 text-blue-800"
      case "Past":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {expoEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-32 sm:h-48 object-cover"
              />
              <Badge className={`absolute top-2 sm:top-4 left-2 sm:left-4 ${getStatusColor(event.status)}`}>
                {event.status}
              </Badge>
            </div>
            <CardContent className="p-3 sm:p-4">
              <h3 className="font-bold text-base sm:text-lg mb-2">{event.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm truncate">{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{event.date}</span>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">Register Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
