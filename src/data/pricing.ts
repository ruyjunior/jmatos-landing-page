import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basic',
        price: 129,
        features: [
            '2 weekly classes',
        ],
    },
    {
        name: 'Plus',
        price: 149,
        features: [
            '3 weekly classes',
        ],
    },
    {
        name: 'Gold',
        price: 169,
        features: [
            '5 weekly classes',
        ],
    },
]