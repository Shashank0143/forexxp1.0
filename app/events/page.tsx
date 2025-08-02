"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Users, Search, Filter, Clock, Building } from "lucide-react"
import { getFromStorage, STORAGE_KEYS } from "@/lib/localStorage"

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  const countries = ["All Countries", "UAE", "Cyprus", "UK", "Singapore", "USA", "Australia", "Germany", "Japan"]
  const eventTypes = ["All Types", "Expo", "Conference", "Workshop", "Seminar", "Networking", "Awards"]
  const statusOptions = ["All Status", "Upcoming", "Ongoing", "Completed", "Cancelled"]

  useEffect(() => {
    // Load events from localStorage or use default data
    const defaultEvents = [
      {
        id: "1",
        title: "WikiEXPO Dubai 2024",
        description:
          "The largest forex and fintech expo in the Middle East, bringing together industry leaders, brokers, and technology providers.",
        type: "Expo",
        country: "UAE",
        city: "Dubai",
        venue: "Dubai World Trade Centre",
        date: "2024-11-15",
        endDate: "2024-11-17",
        time: "09:00 AM - 06:00 PM",
        status: "Upcoming",
        image: "/images/expo-uae.jpg",
        hostBroker: "WikiFX",
        attendees: 5000,
        speakers: [
          { name: "John Smith", title: "CEO, ForexPro", image: "/placeholder.svg?height=60&width=60" },
          { name: "Sarah Johnson", title: "CTO, TradeTech", image: "/placeholder.svg?height=60&width=60" },
        ],
        agenda: [
          { time: "09:00", title: "Registration & Welcome Coffee" },
          { time: "10:00", title: "Keynote: Future of Forex Trading" },
          { time: "11:30", title: "Panel: Regulatory Landscape" },
          { time: "14:00", title: "Technology Showcase" },
        ],
        price: "Free",
        website: "https://wikifx.com/expo-dubai",
      },
      {
        id: "2",
        title: "WikiResearch Cyprus Summit",
        description:
          "An exclusive research-focused event discussing market trends, regulatory changes, and broker analysis methodologies.",
        type: "Conference",
        country: "Cyprus",
        city: "Limassol",
        venue: "Mediterranean Conference Centre",
        date: "2024-09-20",
        endDate: "2024-09-21",
        time: "08:30 AM - 05:00 PM",
        status: "Completed",
        image: "/images/expo-cyprus.jpg",
        hostBroker: "WikiFX Research",
        attendees: 300,
        speakers: [
          { name: "Dr. Maria Kostas", title: "Financial Analyst", image: "/placeholder.svg?height=60&width=60" },
          { name: "Alex Thompson", title: "Regulatory Expert", image: "/placeholder.svg?height=60&width=60" },
        ],
        agenda: [
          { time: "08:30", title: "Registration & Breakfast" },
          { time: "09:30", title: "Market Analysis Presentation" },
          { time: "11:00", title: "Regulatory Updates Panel" },
          { time: "15:00", title: "Networking Session" },
        ],
        price: "$299",
        website: "https://wikifx.com/research-cyprus",
      },
      {
        id: "3",
        title: "London Fintech Forum 2024",
        description:
          "Exploring the intersection of traditional finance and emerging technologies in the heart of London's financial district.",
        type: "Conference",
        country: "UK",
        city: "London",
        venue: "The Shard Conference Centre",
        date: "2024-12-05",
        endDate: "2024-12-06",
        time: "09:00 AM - 06:00 PM",
        status: "Upcoming",
        image: "/placeholder.svg?height=200&width=400&text=London+Fintech+Forum",
        hostBroker: "FinTech Alliance",
        attendees: 800,
        speakers: [
          { name: "James Wilson", title: "Head of Innovation, HSBC", image: "/placeholder.svg?height=60&width=60" },
          { name: "Emma Davis", title: "Blockchain Expert", image: "/placeholder.svg?height=60&width=60" },
        ],
        agenda: [
          { time: "09:00", title: "Welcome & Opening Remarks" },
          { time: "10:00", title: "Blockchain in Finance" },
          { time: "13:00", title: "AI Trading Systems" },
          { time: "16:00", title: "Future of Digital Banking" },
        ],
        price: "$450",
        website: "https://londonfintechforum.com",
      },
      {
        id: "4",
        title: "Singapore Trading Workshop",
        description:
          "Hands-on workshop covering advanced trading strategies, risk management, and platform optimization for Asian markets.",
        type: "Workshop",
        country: "Singapore",
        city: "Singapore",
        venue: "Marina Bay Financial Centre",
        date: "2024-10-12",
        endDate: "2024-10-12",
        time: "10:00 AM - 04:00 PM",
        status: "Upcoming",
        image: "/placeholder.svg?height=200&width=400&text=Singapore+Trading+Workshop",
        hostBroker: "Asia Trading Academy",
        attendees: 150,
        speakers: [
          { name: "Li Wei", title: "Senior Trader", image: "/placeholder.svg?height=60&width=60" },
          { name: "Raj Patel", title: "Risk Manager", image: "/placeholder.svg?height=60&width=60" },
        ],
        agenda: [
          { time: "10:00", title: "Advanced Chart Analysis" },
          { time: "12:00", title: "Risk Management Strategies" },
          { time: "14:00", title: "Platform Optimization" },
          { time: "15:30", title: "Q&A Session" },
        ],
        price: "$199",
        website: "https://asiatradingacademy.com",
      },
      {
        id: "5",
        title: "New York Broker Awards 2024",
        description:
          "Annual awards ceremony recognizing excellence in forex brokerage, customer service, and innovation in the Americas.",
        type: "Awards",
        country: "USA",
        city: "New York",
        venue: "Marriott Marquis Times Square",
        date: "2024-11-30",
        endDate: "2024-11-30",
        time: "07:00 PM - 11:00 PM",
        status: "Upcoming",
        image: "/placeholder.svg?height=200&width=400&text=NY+Broker+Awards",
        hostBroker: "American Forex Association",
        attendees: 400,
        speakers: [
          { name: "Robert Johnson", title: "Industry Veteran", image: "/placeholder.svg?height=60&width=60" },
          { name: "Michelle Brown", title: "Awards Host", image: "/placeholder.svg?height=60&width=60" },
        ],
        agenda: [
          { time: "19:00", title: "Welcome Reception" },
          { time: "20:00", title: "Awards Ceremony" },
          { time: "21:30", title: "Networking Dinner" },
          { time: "23:00", title: "After Party" },
        ],
        price: "$350",
        website: "https://americanforexawards.com",
      },
      {
        id: "6",
        title: "Australian Regulatory Seminar",
        description:
          "Deep dive into ASIC regulations, compliance requirements, and best practices for forex brokers operating in Australia.",
        type: "Seminar",
        country: "Australia",
        city: "Sydney",
        venue: "Sydney Convention Centre",
        date: "2024-08-15",
        endDate: "2024-08-15",
        time: "09:00 AM - 03:00 PM",
        status: "Completed",
        image: "/placeholder.svg?height=200&width=400&text=Australian+Regulatory+Seminar",
        hostBroker: "ASIC",
        attendees: 200,
        speakers: [
          { name: "David Chen", title: "ASIC Representative", image: "/placeholder.svg?height=60&width=60" },
          { name: "Kate Miller", title: "Compliance Expert", image: "/placeholder.svg?height=60&width=60" },
        ],
        agenda: [
          { time: "09:00", title: "ASIC Updates" },
          { time: "10:30", title: "Compliance Best Practices" },
          { time: "12:00", title: "Case Studies" },
          { time: "14:00", title: "Q&A with Regulators" },
        ],
        price: "Free",
        website: "https://asic.gov.au/events",
      },
    ]

    const savedEvents = getFromStorage(
      STORAGE_KEYS.EXPO_EVENTS,
      defaultEvents.map((e) => ({ ...e, speakers: e.speakers ?? [], agenda: e.agenda ?? [] })),
    )
    setEvents(savedEvents)
    setFilteredEvents(savedEvents)
  }, [])

  useEffect(() => {
    let filtered = [...events]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.hostBroker.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.city.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Country filter
    if (selectedCountry && selectedCountry !== "All Countries") {
      filtered = filtered.filter((event) => event.country === selectedCountry)
    }

    // Type filter
    if (selectedType && selectedType !== "All Types") {
      filtered = filtered.filter((event) => event.type === selectedType)
    }

    // Status filter
    if (selectedStatus && selectedStatus !== "All Status") {
      filtered = filtered.filter((event) => event.status === selectedStatus)
    }

    setFilteredEvents(filtered)
  }, [events, searchTerm, selectedCountry, selectedType, selectedStatus])

  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800"
      case "Ongoing":
        return "bg-green-100 text-green-800"
      case "Completed":
        return "bg-gray-100 text-gray-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "Expo":
        return "bg-purple-100 text-purple-800"
      case "Conference":
        return "bg-blue-100 text-blue-800"
      case "Workshop":
        return "bg-green-100 text-green-800"
      case "Seminar":
        return "bg-yellow-100 text-yellow-800"
      case "Awards":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 md:px-20">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Forex Events & Conferences</h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Discover upcoming forex events, conferences, and workshops worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                placeholder="Search events by title, location, or host..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCountry("")
                  setSelectedType("")
                  setSelectedStatus("")
                }}
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{filteredEvents.length} Events Found</h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                  <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {event.country}
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{event.description}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      {event.date} {event.endDate !== event.date ? `- ${event.endDate}` : ""}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      {event.venue}, {event.city}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Hosted by {event.hostBroker}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                {/* Speakers */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Featured Speakers</h4>
                  <div className="flex flex-wrap gap-2">
                    {(event.speakers ?? []).slice(0, 2).map((speaker, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="text-xs font-medium">{speaker.name}</div>
                          <div className="text-xs text-gray-500">{speaker.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agenda Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Agenda Highlights</h4>
                  <div className="space-y-1">
                    {(event.agenda ?? []).slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <span className="font-medium mr-2">{item.time}</span>
                        <span>{item.title}</span>
                      </div>
                    ))}
                    {(event.agenda ?? []).length > 2 && (
                      <div className="text-xs text-blue-600">+{(event.agenda ?? []).length - 2} more sessions</div>
                    )}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-gray-600">Price</div>
                    <div className="text-lg font-bold text-green-600">{event.price}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="text-xs">
                      View Details
                    </Button>
                    {event.status === "Upcoming" && (
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        Register
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or check back later for new events.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCountry("")
                setSelectedType("")
                setSelectedStatus("")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Upcoming Events Summary */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events This Month</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {filteredEvents.filter((e) => e.status === "Upcoming").length}
              </div>
              <div className="text-sm text-gray-600">Upcoming Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {filteredEvents.filter((e) => e.type === "Expo").length}
              </div>
              <div className="text-sm text-gray-600">Expos & Conferences</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(filteredEvents.map((e) => e.country)).size}
              </div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
