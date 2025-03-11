import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-16 text-center bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900">
                Pricing
            </h3>
            <p className="mt-2 text-gray-600">
                Our prices are unbeatable
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
                ))}
            </div>
        </section>
    )
}
export default Pricing