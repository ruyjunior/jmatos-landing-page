import { FiActivity } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Benefits Group Title",
        description: "Description of benefits",
        bullets: [
            {
                title: "Benefits Title",
                description: "Description of benefits",
                icon: <FiActivity size={26} /> 
            }, // Add more items
        ],
        imageSrc: "/images/benefits/benefit1.png"
    }
];
