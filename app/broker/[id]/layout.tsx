import type React from "react"
import type { Metadata } from "next"

interface BrokerLayoutProps {
  children: React.ReactNode
  params: { id: string }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // In a real app, you'd fetch broker data here
  const brokerName = "AvaTrade" // This would come from your data source

  return {
    title: `${brokerName} Review 2024 - Forex Broker Analysis | ForexXP`,
    description: `Comprehensive ${brokerName} review and analysis. Compare spreads, regulations, trading platforms, and user reviews. Expert forex broker evaluation by ForexXP.`,
    keywords: `${brokerName}, forex broker, trading review, forex spreads, MT4, MT5, regulated broker, forex trading`,
    openGraph: {
      title: `${brokerName} Forex Broker Review | ForexXP`,
      description: `Expert analysis of ${brokerName} - spreads, regulation, platforms, and user reviews. Make informed forex trading decisions.`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${brokerName} Forex Broker Review | ForexXP`,
      description: `Expert analysis of ${brokerName} - spreads, regulation, platforms, and user reviews.`,
    },
    alternates: {
      canonical: `/broker/${params.id}`,
    },
  }
}

export default function BrokerLayout({ children }: BrokerLayoutProps) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "AvaTrade",
            description: "Regulated forex broker offering MT4/MT5 trading platforms with competitive spreads",
            url: "https://www.avatrade.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IE",
              addressLocality: "Dublin",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "9.49",
              bestRating: "10",
              worstRating: "1",
            },
            offers: {
              "@type": "Offer",
              description: "Forex trading services with regulated environment",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
