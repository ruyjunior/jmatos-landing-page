import { FiBarChart2, FiBriefcase, FiDollarSign, FiPieChart, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Health & Performance",
        description: "Eleve seu condicionamento físico com um treinamento de boxe completo. Nossa abordagem combina técnica, resistência e disciplina para transformar seu corpo e mente.",
        bullets: [
            {
                title: "Treinamento Intensivo",
                description: "Aprimore força, agilidade e resistência com treinos dinâmicos e desafiadores.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Metas Personalizadas",
                description: "Defina e acompanhe seus objetivos, seja para competição, defesa pessoal ou condicionamento.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Análise de Performance",
                description: "Monitore sua evolução com métricas precisas e feedback especializado.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/others/2.png"
    },
    {
        title: "Foco e Disciplina",
        description: "Desenvolva força mental e física com o boxe. Treine com determinação, aprimore sua técnica e construa uma mentalidade vencedora.",
        bullets: [
            {
                title: "Treinos Estratégicos",
                description: "Exercícios estruturados para melhorar resistência, técnica e reflexos.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Mentalidade de Campeão",
                description: "Aprenda a controlar o foco e a disciplina dentro e fora do ringue.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Acompanhamento de Desempenho",
                description: "Monitore seu progresso com métricas claras e feedback especializado.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/others/3.png"
    }
]