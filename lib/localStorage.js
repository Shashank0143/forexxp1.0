// localStorage utility functions for ForexXP application

export const STORAGE_KEYS = {
  BROKER_RANKINGS: "brokerRankings",
  NEWS_ITEMS: "newsItems",
  EXPO_EVENTS: "expoEvents",
  RANKINGS_DATA: "rankingsData",
  SPREAD_DATA: "spreadData",
  PROTECTION_CASES: "protectionCases",
  FIELD_SURVEYS: "fieldSurveys",
  VPS_PLANS: "vpsPlans",
  FOREXXP_BROKERS: "forexXPBrokers",
  USER_PREFERENCES: "userPreferences",
  SEARCH_HISTORY: "searchHistory",
  DETAILED_BROKERS: "detailedBrokers",
}

// Generic localStorage functions
export const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (error) {
    console.error("Error saving to localStorage:", error)
    return false
  }
}

export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error("Error reading from localStorage:", error)
    return defaultValue
  }
}

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error("Error removing from localStorage:", error)
    return false
  }
}

// Specific data management functions
export const initializeDefaultData = () => {
  // Initialize broker rankings
  if (!getFromStorage(STORAGE_KEYS.BROKER_RANKINGS)) {
    const defaultBrokers = [
      {
        id: "1",
        name: "AvaTrade",
        logo: "/placeholder.svg?height=40&width=40",
        score: 9.49,
        regulation: "EU",
        years: "15-20 years",
        rank: 1,
        status: "Regulated",
      },
      {
        id: "2",
        name: "FXCM",
        logo: "/placeholder.svg?height=40&width=40",
        score: 9.34,
        regulation: "AU",
        years: "Above 20 years",
        rank: 2,
        status: "Regulated",
      },
      {
        id: "3",
        name: "STARTTRADER",
        logo: "/placeholder.svg?height=40&width=40",
        score: 9.22,
        regulation: "AU",
        years: "10-15 years",
        rank: 3,
        status: "Regulated",
      },
      {
        id: "4",
        name: "IC Markets Global",
        logo: "/placeholder.svg?height=40&width=40",
        score: 9.1,
        regulation: "AU",
        years: "10-15 years",
        rank: 4,
        status: "Regulated",
      },
      {
        id: "5",
        name: "XM",
        logo: "/placeholder.svg?height=40&width=40",
        score: 9.1,
        regulation: "AU",
        years: "10-15 years",
        rank: 5,
        status: "Regulated",
      },
      {
        id: "6",
        name: "EC Markets",
        logo: "/placeholder.svg?height=40&width=40",
        score: 9.07,
        regulation: "AU",
        years: "10-15 years",
        rank: 6,
        status: "Regulated",
      },
      {
        id: "7",
        name: "Exness",
        logo: "/placeholder.svg?height=40&width=40",
        score: 9.01,
        regulation: "CY",
        years: "10-15 years",
        rank: 7,
        status: "Regulated",
      },
      {
        id: "8",
        name: "Trade Nation",
        logo: "/placeholder.svg?height=40&width=40",
        score: 8.99,
        regulation: "AU",
        years: "10-15 years",
        rank: 8,
        status: "Regulated",
      },
      {
        id: "9",
        name: "GO Markets",
        logo: "/placeholder.svg?height=40&width=40",
        score: 8.98,
        regulation: "AU",
        years: "Above 20 years",
        rank: 9,
        status: "Regulated",
      },
      {
        id: "10",
        name: "MultiBank Group",
        logo: "/placeholder.svg?height=40&width=40",
        score: 8.96,
        regulation: "AU",
        years: "10-15 years",
        rank: 10,
        status: "Regulated",
      },
    ]
    saveToStorage(STORAGE_KEYS.BROKER_RANKINGS, defaultBrokers)
  }

  // Initialize detailed brokers for search page
  if (!getFromStorage(STORAGE_KEYS.DETAILED_BROKERS)) {
    const detailedBrokers = [
      {
        id: "1",
        name: "AvaTrade",
        logo: "/placeholder.svg?height=40&width=80&text=AVATRADE",
        country: "Ireland",
        flag: "🇮🇪",
        years: "15-20 years",
        environment: "AA",
        score: 9.49,
        regulations: [
          { type: "ASC Market Maker (MM)", status: "Regulated" },
          { type: "FCA Market Maker (MM)", status: "Regulated" },
        ],
        licenseNumber: "C53877",
        established: 2006,
        regulatoryBodies: ["Securities and Futures", "Financial Conduct Authority"],
      },
      {
        id: "2",
        name: "FXCM",
        logo: "/placeholder.svg?height=40&width=80&text=FXCM",
        country: "United Kingdom",
        flag: "🇬🇧",
        years: "Above 20 years",
        environment: "AA",
        score: 9.34,
        regulations: [
          { type: "FCA Market Maker (MM)", status: "Regulated" },
          { type: "ASIC Market Maker (MM)", status: "Regulated" },
        ],
        licenseNumber: "217689",
        established: 1999,
        regulatoryBodies: ["Financial Conduct Authority", "Australia Securities & Investment"],
      },
    ]
    saveToStorage(STORAGE_KEYS.DETAILED_BROKERS, detailedBrokers)
  }

  // Initialize news items
  if (!getFromStorage(STORAGE_KEYS.NEWS_ITEMS)) {
    const defaultNews = [
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
    saveToStorage(STORAGE_KEYS.NEWS_ITEMS, defaultNews)
  }

  // Initialize expo events
  if (!getFromStorage(STORAGE_KEYS.EXPO_EVENTS)) {
    const defaultEvents = [
      {
        id: "1",
        title: "ForexEXPO",
        location: "United Arab Emirates • Dubai",
        date: "2024-11-15",
        image: "/images/expo-uae.jpg",
        status: "Signing up",
      },
      {
        id: "2",
        title: "ForexResearch",
        location: "Cyprus • Limassol",
        date: "2024-09-20",
        image: "/images/expo-cyprus.jpg",
        status: "Signing up",
      },
    ]
    saveToStorage(STORAGE_KEYS.EXPO_EVENTS, defaultEvents)
  }

  // Initialize ForexXP brokers
  if (!getFromStorage(STORAGE_KEYS.FOREXXP_BROKERS)) {
    const defaultForexXPBrokers = [
      {
        id: "1",
        name: "STARTRADE",
        logo: "/placeholder.svg?height=60&width=60",
        score: 9.22,
        regulation: "Regulated",
        country: "Australia",
        established: "2018",
        minDeposit: 100,
        maxLeverage: "1:500",
        platforms: ["MT4", "MT5"],
        features: ["ECN", "STP", "Copy Trading"],
      },
      {
        id: "2",
        name: "V1 Markets",
        logo: "/placeholder.svg?height=60&width=60",
        score: 8.95,
        regulation: "Regulated",
        country: "Australia",
        established: "2020",
        minDeposit: 50,
        maxLeverage: "1:400",
        platforms: ["MT4", "WebTrader"],
        features: ["Social Trading", "Mobile App"],
      },
      {
        id: "3",
        name: "IC Markets Global",
        logo: "/placeholder.svg?height=60&width=60",
        score: 9.1,
        regulation: "Regulated",
        country: "Australia",
        established: "2007",
        minDeposit: 200,
        maxLeverage: "1:500",
        platforms: ["MT4", "MT5", "cTrader"],
        features: ["Raw Spread", "ECN", "VPS"],
      },
      {
        id: "4",
        name: "MultiBank Group",
        logo: "/placeholder.svg?height=60&width=60",
        score: 8.96,
        regulation: "Regulated",
        country: "UAE",
        established: "2005",
        minDeposit: 250,
        maxLeverage: "1:500",
        platforms: ["MT4", "MT5"],
        features: ["Copy Trading", "Islamic Account"],
      },
      {
        id: "5",
        name: "Octa",
        logo: "/placeholder.svg?height=60&width=60",
        score: 8.75,
        regulation: "Regulated",
        country: "Cyprus",
        established: "2011",
        minDeposit: 25,
        maxLeverage: "1:500",
        platforms: ["MT4", "MT5"],
        features: ["Micro Lots", "Bonus Program"],
      },
      {
        id: "6",
        name: "easyMarkets",
        logo: "/placeholder.svg?height=60&width=60",
        score: 8.45,
        regulation: "Regulated",
        country: "Cyprus",
        established: "2001",
        minDeposit: 25,
        maxLeverage: "1:400",
        platforms: ["MT4", "WebTrader"],
        features: ["Fixed Spreads", "Guaranteed Stop Loss"],
      },
    ]
    saveToStorage(STORAGE_KEYS.FOREXXP_BROKERS, defaultForexXPBrokers)
  }

  // Initialize other data...
  if (!getFromStorage(STORAGE_KEYS.RANKINGS_DATA)) {
    const defaultRankings = {
      balance: [
        { rank: 1, broker: "FBS", score: 19.22, change: "↑", flag: "🇦🇺" },
        { rank: 2, broker: "CPT Markets", score: 17.71, change: "↑", flag: "🇬🇧" },
        { rank: 3, broker: "Exness", score: 16.95, change: "↑", flag: "🇨🇾" },
      ],
      totalLoss: [
        { rank: 1, broker: "FBS", score: 84.29, change: "↑", flag: "🇦🇺" },
        { rank: 2, broker: "CPT Markets", score: 74.42, change: "↑", flag: "🇬🇧" },
        { rank: 3, broker: "Exness", score: 74.31, change: "↑", flag: "🇨🇾" },
      ],
      stopOut: [
        { rank: 1, broker: "Vantage", score: 7.89, change: "↑", flag: "🇦🇺" },
        { rank: 2, broker: "FBS", score: 7.88, change: "↑", flag: "🇦🇺" },
        { rank: 3, broker: "Exness", score: 7.49, change: "↑", flag: "🇨🇾" },
      ],
    }
    saveToStorage(STORAGE_KEYS.RANKINGS_DATA, defaultRankings)
  }
}

// Broker-specific functions
export const getBrokerRankings = () => {
  return getFromStorage(STORAGE_KEYS.BROKER_RANKINGS, [])
}

export const updateBrokerRanking = (brokerId, updates) => {
  const brokers = getBrokerRankings()
  const updatedBrokers = brokers.map((broker) => (broker.id === brokerId ? { ...broker, ...updates } : broker))
  return saveToStorage(STORAGE_KEYS.BROKER_RANKINGS, updatedBrokers)
}

// News-specific functions
export const getNewsItems = () => {
  return getFromStorage(STORAGE_KEYS.NEWS_ITEMS, [])
}

export const addNewsItem = (newsItem) => {
  const news = getNewsItems()
  const newNews = [newsItem, ...news]
  return saveToStorage(STORAGE_KEYS.NEWS_ITEMS, newNews)
}

// Search history functions
export const getSearchHistory = () => {
  return getFromStorage(STORAGE_KEYS.SEARCH_HISTORY, [])
}

export const addToSearchHistory = (searchTerm) => {
  const history = getSearchHistory()
  const newHistory = [searchTerm, ...history.filter((term) => term !== searchTerm)].slice(0, 10)
  return saveToStorage(STORAGE_KEYS.SEARCH_HISTORY, newHistory)
}

// User preferences
export const getUserPreferences = () => {
  return getFromStorage(STORAGE_KEYS.USER_PREFERENCES, {
    language: "en",
    currency: "USD",
    theme: "light",
    notifications: true,
  })
}

export const updateUserPreferences = (preferences) => {
  const current = getUserPreferences()
  const updated = { ...current, ...preferences }
  return saveToStorage(STORAGE_KEYS.USER_PREFERENCES, updated)
}

// Initialize data on first load
if (typeof window !== "undefined") {
  initializeDefaultData()
}
