import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Users, Star, ArrowRight, Search } from "lucide-react"
import BrokerRankings from "@/components/broker-rankings"
import NewsSection from "@/components/news-section"
import ExpoSection from "@/components/expo-section"
import RankingsSection from "@/components/rankings-section"
import SpreadComparison from "@/components/spread-comparison"
import RightsProtection from "@/components/rights-protection"
import FieldSurvey from "@/components/field-survey"
import VPSAds from "@/components/vps-ads"
import ForexXPBrokers from "@/components/forexXP-brokers"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const featuredBrokers = [
    {
      id: "1",
      name: "MetaTrader Pro",
      logo: "/placeholder.svg?height=60&width=60",
      rating: 4.8,
      regulation: "FCA, CySEC",
      minDeposit: "$100",
      spread: "0.1 pips",
      features: ["ECN Trading", "Mobile App", "24/7 Support"],
    },
    {
      id: "2",
      name: "ForexGlobal",
      logo: "/placeholder.svg?height=60&width=60",
      rating: 4.6,
      regulation: "ASIC, FCA",
      minDeposit: "$250",
      spread: "0.2 pips",
      features: ["Copy Trading", "Educational Resources", "Demo Account"],
    },
    {
      id: "3",
      name: "TradeMaster",
      logo: "/placeholder.svg?height=60&width=60",
      rating: 4.7,
      regulation: "CySEC, FSCA",
      minDeposit: "$50",
      spread: "0.3 pips",
      features: ["Social Trading", "Multiple Platforms", "Low Fees"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 px-0 md:px-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004AAD] via-[#0056c4] to-[#0062db] text-white py-12 sm:py-20 rounded-lg px-0 md:px-16">
        <div className="container mx-auto px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              Find Your Perfect <span className="text-white bg-[#0062db] px-3 py-1 rounded">Forex Broker</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100">
              Compare and choose from 1000+ regulated brokers worldwide
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <Input
                    placeholder="Search for brokers, regulations, or features..."
                    className="pl-10 sm:pl-12 py-3 sm:py-4 text-base sm:text-lg bg-white text-gray-900"
                  />
                </div>
                <Button size="lg" className="bg-[#0062db] hover:bg-[#0056c4] text-white font-semibold px-6 sm:px-8">
                  Search Brokers
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">1000+</div>
                <div className="text-xs sm:text-sm text-blue-100">Brokers Listed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">2M+</div>
                <div className="text-xs sm:text-sm text-blue-100">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-0 py-4 sm:py-6">
        {/* Top Section - Broker Rankings and News */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="lg:col-span-1">
            <BrokerRankings />
          </div>
          <div className="lg:col-span-2">
            <NewsSection />
          </div>
        </div>

        {/* Expo Section */}
        <div className="px-0 md:px-16">
          <ExpoSection />
        </div>

        {/* Rankings Section */}
        <div className="px-0 md:px-16">
          <RankingsSection />
        </div>

        {/* Spread Comparison */}
        <div className="px-0 md:px-16">
          <SpreadComparison />
        </div>

        {/* ForexXP Brokers */}
        <div className="px-0 md:px-16">
          <ForexXPBrokers />
        </div>

        {/* Rights Protection Center */}
        <div className="px-0 md:px-16">
          <RightsProtection />
        </div>

        {/* Field Survey */}
        <div className="px-0 md:px-16">
          <FieldSurvey />
        </div>

        {/* VPS Advertisements */}
        <div className="px-0 md:px-16">
          <VPSAds />
        </div>

        {/* Features Section */}
        <section className="py-8 sm:py-16 bg-white rounded-lg mb-6 sm:mb-8 px-0 md:px-16">
          <div className="container mx-auto px-0">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ForexXP?</h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive broker analysis to help you make informed trading decisions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-[#004AAD] mx-auto mb-3 sm:mb-4" />
                  <CardTitle className="text-sm sm:text-base">Regulatory Check</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Verify broker licenses and regulatory compliance across multiple jurisdictions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                  <CardTitle className="text-sm sm:text-base">Real-time Rankings</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Updated broker rankings based on performance, fees, and user reviews
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 sm:h-12 sm:w-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
                  <CardTitle className="text-sm sm:text-base">User Reviews</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Authentic reviews from real traders sharing their experiences
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Star className="h-8 w-8 sm:h-12 sm:w-12 text-[#004AAD] mx-auto mb-3 sm:mb-4" />
                  <CardTitle className="text-sm sm:text-base">Expert Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Professional broker analysis and comparison tools for informed decisions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Brokers */}
        <section className="py-8 sm:py-16 px-0 md:px-16">
          <div className="container mx-auto px-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Rated Brokers</h2>
                <p className="text-base sm:text-xl text-gray-600">Discover the highest-rated brokers in the industry</p>
              </div>
              <Link href="/search">
                <Button
                  variant="outline"
                  className="hidden sm:flex items-center bg-transparent border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white"
                >
                  View All Brokers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {featuredBrokers.map((broker) => (
                <Card key={broker.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={broker.logo || "/placeholder.svg"}
                          alt={broker.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded"
                        />
                        <div>
                          <CardTitle className="text-sm sm:text-lg">{broker.name}</CardTitle>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-[#004AAD] text-[#004AAD]" />
                            <span className="text-xs sm:text-sm font-medium">{broker.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-[#004AAD] text-white">
                        {broker.regulation}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">Min Deposit:</span>
                        <span className="text-xs sm:text-sm font-medium">{broker.minDeposit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">Spread from:</span>
                        <span className="text-xs sm:text-sm font-medium">{broker.spread}</span>
                      </div>
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {broker.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-[#004AAD] text-[#004AAD]">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link href={`/broker/${broker.id}`}>
                        <Button className="w-full mt-4 text-sm bg-[#004AAD] hover:bg-[#003a8c]">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-6 sm:mt-8 sm:hidden">
              <Link href="/search">
                <Button
                  variant="outline"
                  className="border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white bg-transparent"
                >
                  View All Brokers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-16 bg-[#004AAD] text-white rounded-lg px-0 md:px-16">
          <div className="container mx-auto px-0 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of traders who trust ForexXP to find their perfect trading partner
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#004AAD] font-semibold px-6 sm:px-8"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#004AAD] bg-transparent"
                >
                  Browse Brokers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
