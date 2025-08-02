import type { Metadata } from "next/types"
import BrokerProfileClientPage from "./BrokerProfileClientPage"

export const metadata: Metadata = {
  title: "Forex Broker Profile | ForexXP",
  description: "Detailed profile of forex broker AvaTrade, including ForexXP score, licenses, spreads, and more.",
}

export default function BrokerProfilePage({ params }: { params: { id: string } }) {
  return <BrokerProfileClientPage params={params} />
}
