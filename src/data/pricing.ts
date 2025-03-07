import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basic',
        price: '129',
        features: [
            '2 Aulas semanais',
        ],
    },
    {
        name: 'Plus',
        price: 149,
        features: [
            '3 Aulas semanais',
        ],
    },
    {
        name: 'Gold',
        price: 169,
        features: [
            '5 aulas semanais',
        ],
    },
]