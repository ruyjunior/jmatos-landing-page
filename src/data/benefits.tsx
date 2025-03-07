import { FiBarChart2, FiActivity, FiClipboard, FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Health & Performance",
        description: "Take your fitness to the next level with high-intensity CrossFit training. Our program combines strength, endurance, and agility to transform your body and mind.",
        bullets: [
            {
                title: "High-Intensity Workouts",
                description: "Enhance strength, speed, and endurance with dynamic and challenging training sessions.",
                icon: <FiActivity size={26} /> // Representa intensidade e movimento
            },
            {
                title: "Personalized Goals",
                description: "Set and track your fitness objectives, whether it's weight loss, muscle gain, or overall conditioning.",
                icon: <FiTarget size={26} /> // Ícone de metas
            },
            {
                title: "Performance Analysis",
                description: "Monitor your progress with accurate metrics and expert feedback.",
                icon: <FiBarChart2 size={26} /> // Representa análise de desempenho
            }
        ],
        imageSrc: "/images/others/2.png"
    },
    {
        title: "Focus & Discipline",
        description: "Build mental and physical strength with CrossFit. Train with determination, master technique, and develop an unbreakable mindset.",
        bullets: [
            {
                title: "Structured Training",
                description: "Workouts designed to improve endurance, technique, and mobility.",
                icon: <FiClipboard size={26} /> // Representa planejamento e estruturação
            },
            {
                title: "Champion Mindset",
                description: "Learn to master focus and discipline inside and outside the gym.",
                icon: <FiShield size={26} /> // Simboliza força mental e disciplina
            },
            {
                title: "Progress Tracking",
                description: "Track your performance with clear metrics and expert feedback.",
                icon: <FiTrendingUp size={26} /> // Indicador de progresso e evolução
            }
        ],
        imageSrc: "/images/others/3.png"
    }
];
