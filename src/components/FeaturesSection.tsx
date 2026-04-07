import { LinkAccountsCard } from "@/components/feature-cards/LinkAccountsCard"
import { PaymentRolesCard } from "@/components/feature-cards/PaymentRolesCard"
import { SendFundsCard } from "@/components/feature-cards/SendFundsCard"
import { PatrolCard } from "@/components/feature-cards/PatrolCard"

export function FeaturesSection() {
  return (
    <section className="px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <LinkAccountsCard />
        <PaymentRolesCard />
        <SendFundsCard />
        <PatrolCard />
      </div>
    </section>
  )
}
