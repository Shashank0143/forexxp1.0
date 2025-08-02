"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Shield,
  Globe,
  ExternalLink,
  CheckCircle,
  Server,
  Monitor,
  Smartphone,
  Clock,
  TrendingUp,
  Award,
  Building,
} from "lucide-react"

export default function BrokerProfileClientPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("real-time-spread")

  // Mock broker data - in real app, fetch based on params.id
  const broker = {
    id: params.id,
    name: "AvaTrade",
    logo: "/placeholder.svg?height=60&width=120&text=AVATRADE",
    country: "Ireland",
    flag: "🇮🇪",
    years: "15-20 years",
    score: 9.49,
    rating: "AAA",
    established: 2006,
    website: "https://www.avatrade.com",
    phone: "+353 1 6447 200",
    email: "support@avatrade.com",
    regulation: [
      { authority: "ASIC", status: "Regulated", license: "406684", country: "Australia" },
      { authority: "FCA", status: "Regulated", license: "793061", country: "United Kingdom" },
    ],
    basicInfo: {
      companyName: "AvaTrade Ltd",
      registeredAddress: "1st Floor, 1-2 Victoria Buildings, Haddington Road, Dublin 4, D04 XN32, Ireland",
      contactNumber: "+353 1 6447 200",
      website: "https://www.avatrade.com",
      email: "support@avatrade.com",
    },
    licenses: [
      {
        id: 1,
        authority: "ASIC",
        fullName: "Australian Securities and Investments Commission",
        license: "406684",
        status: "Regulated",
        country: "Australia",
        icon: "🇦🇺",
      },
      {
        id: 2,
        authority: "FCA",
        fullName: "Financial Conduct Authority",
        license: "793061",
        status: "Regulated",
        country: "United Kingdom",
        icon: "🇬🇧",
      },
    ],
    spreads: [
      {
        pair: "NZDUSD",
        buy: "0.66439",
        sell: "Standard",
        spread: "2.0",
        avgSpread: "2.00",
        longPositionSwap: "1.84",
        shortPositionSwap: "3.62",
      },
      {
        pair: "EURUSD",
        buy: "1.08738",
        sell: "Standard",
        spread: "1.2",
        avgSpread: "1.20",
        longPositionSwap: "4.19",
        shortPositionSwap: "5.43",
      },
      {
        pair: "USDCAD",
        buy: "1.37758",
        sell: "Standard",
        spread: "0.7",
        avgSpread: "0.70",
        longPositionSwap: "2.71",
        shortPositionSwap: "1.04",
      },
      {
        pair: "XAUUSD",
        buy: "1931.43",
        sell: "Standard",
        spread: "1.5",
        avgSpread: "1.50",
        longPositionSwap: "5.43",
        shortPositionSwap: "2.90",
      },
      {
        pair: "XAGUSD",
        buy: "23.21",
        sell: "Standard",
        spread: "1.4",
        avgSpread: "1.40",
        longPositionSwap: "4.37",
        shortPositionSwap: "1.63",
      },
      {
        pair: "GBPJPY",
        buy: "188.650",
        sell: "Standard",
        spread: "2.0",
        avgSpread: "2.10",
        longPositionSwap: "2.63",
        shortPositionSwap: "5.77",
      },
    ],
    software: [
      {
        name: "Meta Trader 4",
        shortName: "MT4",
        license: "Full License MT4",
        status: "verified",
        rating: 4.8,
        downloads: "10M+",
      },
      {
        name: "Meta Trader 5",
        shortName: "MT5",
        license: "Full License MT5",
        status: "verified",
        rating: 4.7,
        downloads: "5M+",
      },
      {
        name: "Trading Software",
        shortName: "TS",
        license: "Custom Platform",
        status: "verified",
        rating: 4.5,
        downloads: "1M+",
      },
    ],
  }

  const tabs = [
    { id: "real-time-spread", label: "Real-time Spread" },
    { id: "related-software", label: "Related Software" },
    { id: "environment", label: "Environment" },
    { id: "forexXP-qa", label: "ForexXP Q&A" },
    { id: "marketing-strategy", label: "Marketing Strategy" },
    { id: "biz-area", label: "Biz Area" },
    { id: "genealogy", label: "Genealogy" },
    { id: "relevant-enterprise", label: "Relevant Enterprise" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 md:px-20">
      <div className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Side - Broker Info */}
              <div className="flex-1">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <img
                      src={broker.logo || "/placeholder.svg"}
                      alt={broker.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h1 className="text-2xl font-bold">{broker.name}</h1>
                      <Badge className="bg-green-100 text-green-800">Regulated</Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <span className="text-lg">{broker.flag}</span>
                      <span>{broker.country}</span>
                      <span>•</span>
                      <span>{broker.years}</span>
                    </div>
                    <div className="text-sm text-gray-600">Regulated in Australia</div>
                    <div className="text-sm text-gray-600">Market Maker (MM)</div>
                  </div>
                </div>

                {/* Website and Actions */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Globe className="h-4 w-4" />
                    <a href={broker.website} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      {broker.website}
                    </a>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="bg-green-600 hover:bg-green-700">Open Account</Button>
                  <Button variant="outline" className="bg-transparent">
                    Free Machine
                  </Button>
                </div>
              </div>

              {/* Right Side - Score and Rating */}
              <div className="lg:w-80">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">{broker.score}</div>
                  <div className="text-sm text-gray-600">ForexXP Score</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-orange-600 font-bold">3.49</span>
                    </div>
                    <div className="text-xs text-gray-600">Influence</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">9.99</span>
                    </div>
                    <div className="text-xs text-gray-600">Management</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">9.99</span>
                    </div>
                    <div className="text-xs text-gray-600">History</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{broker.rating}</div>
                    <div className="text-xs text-gray-600">Environment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">704.5</div>
                    <div className="text-xs text-gray-600">Average</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <img src="/placeholder.svg?height=20&width=60&text=MT4" alt="MT4" className="h-5" />
                  <img src="/placeholder.svg?height=20&width=60&text=MT5" alt="MT5" className="h-5" />
                  <Badge variant="outline" className="text-xs">
                    STP
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ECN
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Survey Section */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="font-medium">
                    100% Mediation in forex complaints by ForexXP Rating within 7 working days
                  </span>
                  <div className="text-xs text-gray-600">by Request of FMA, Rating 7 working days</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=40&width=120&text=ForexXP+Survey"
                  alt="ForexXP Survey"
                  className="h-10"
                />
                <Badge className="bg-green-100 text-green-800">AvaTrade</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Licenses Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Shield className="h-5 w-5 mr-2" />
                Licenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {broker.licenses.map((license) => (
                  <div key={license.id} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">{license.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge className="bg-green-100 text-green-800 text-xs">{license.status}</Badge>
                        <span className="text-sm font-medium">{license.authority}</span>
                      </div>
                      <div className="text-xs text-gray-600">License: {license.license}</div>
                      <div className="text-xs text-gray-600">{license.fullName}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* VPS Standard Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Server className="h-5 w-5 mr-2" />
                VPS Standard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Monitor className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-xs text-gray-600">Desktop</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Smartphone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Globe className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="text-xs text-gray-600">24/7</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
                <div className="text-lg font-bold mb-2">Up to 100</div>
                <div className="text-sm mb-2">Deposit Bonus</div>
                <div className="text-sm mb-3">Free Trades</div>
                <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Start with AvaTrade
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{broker.flag}</span>
                  <span className="text-sm font-medium">{broker.country}</span>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600">Company Name:</div>
                  <div>{broker.basicInfo.companyName}</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600">Contact Number:</div>
                  <div>{broker.basicInfo.contactNumber}</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600">Website:</div>
                  <a
                    href={broker.basicInfo.website}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {broker.basicInfo.website}
                  </a>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600">Email:</div>
                  <div>{broker.basicInfo.email}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed Content */}
        <Card>
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="real-time-spread" className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Real-time Spread</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left p-3 font-medium">Trading pairs</th>
                        <th className="text-left p-3 font-medium">Buy</th>
                        <th className="text-left p-3 font-medium">Account</th>
                        <th className="text-left p-3 font-medium">Spread</th>
                        <th className="text-left p-3 font-medium">Average Spread/day</th>
                        <th className="text-left p-3 font-medium">Long Position Swap (USD/lot)</th>
                        <th className="text-left p-3 font-medium">Short Position Swap (USD/lot)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {broker.spreads.map((spread, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium text-blue-600">{spread.pair}</td>
                          <td className="p-3">{spread.buy}</td>
                          <td className="p-3">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              {spread.sell}
                            </Badge>
                          </td>
                          <td className="p-3">{spread.spread}</td>
                          <td className="p-3">{spread.avgSpread}</td>
                          <td className="p-3">{spread.longPositionSwap}</td>
                          <td className="p-3">{spread.shortPositionSwap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline" className="bg-transparent">
                    View More
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="related-software" className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Related Software</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {broker.software.map((software, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-4">
                        <div className="mb-3">
                          <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                          <div className="font-bold text-lg">{software.shortName}</div>
                        </div>
                        <div className="space-y-2">
                          <Badge className="bg-green-100 text-green-800 w-full">{software.license}</Badge>
                          <div className="text-sm text-gray-600">{software.name}</div>
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{software.rating}</span>
                          </div>
                          <div className="text-xs text-gray-500">{software.downloads} downloads</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ForexXP verified brokers with full MT4/5 licenses provide comprehensive trading services and
                    follow-up technical support. Generally, these brokers and technology are relatively mature and
                    stable, and the trading environment is relatively good.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="environment" className="p-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Forex Trading Environment Analysis</h3>
                  <p className="text-gray-600">
                    Explore the trading environment offered by AvaTrade. Our analysis covers server stability, execution
                    speed, and overall reliability for forex traders.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="forexXP-qa" className="p-6">
                <div className="text-center py-12">
                  <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ForexXP Q&A</h3>
                  <p className="text-gray-600">
                    Get answers to frequently asked questions about AvaTrade, verified by ForexXP. Learn about account
                    types, trading platforms, and regulatory compliance.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="marketing-strategy" className="p-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AvaTrade Marketing Strategy Analysis</h3>
                  <p className="text-gray-600">
                    An in-depth look at AvaTrade's marketing strategies, including their approach to attracting and
                    retaining forex traders. Understand their campaigns and promotional offers.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="biz-area" className="p-6">
                <div className="text-center py-12">
                  <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AvaTrade Business Area and Forex Services
                  </h3>
                  <p className="text-gray-600">
                    Explore the range of forex services offered by AvaTrade and their global business presence. Learn
                    about the regions they serve and the types of trading accounts available.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="genealogy" className="p-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AvaTrade Company Genealogy Information</h3>
                  <p className="text-gray-600">
                    Trace the history and development of AvaTrade as a leading forex broker. Understand their corporate
                    structure and key milestones in the industry.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="relevant-enterprise" className="p-6">
                <div className="text-center py-12">
                  <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Relevant Enterprise</h3>
                  <p className="text-gray-600">
                    Discover related enterprises and partnerships associated with AvaTrade in the forex market.
                    Understand their network and affiliations within the trading community.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
