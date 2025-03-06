import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Os treinos na ${siteDetails.siteName} são indicados para iniciantes?`,
        answer: 'Sim! Nossos treinos são estruturados para atender desde iniciantes até atletas experientes. Você aprenderá no seu ritmo, com acompanhamento profissional.',
    },
    {
        question: `Preciso de equipamento próprio para treinar?`,
        answer: 'Não é obrigatório. Fornecemos luvas e outros equipamentos básicos para iniciantes. Porém, recomendamos que adquira seus próprios itens para maior conforto e higiene.',
    },
    {
        question: 'O boxe ajuda no emagrecimento e condicionamento físico?',
        answer: `Com certeza! Os treinos de boxe são intensos e trabalham todo o corpo, ajudando na queima de gordura, no ganho de resistência e no fortalecimento muscular.`,
    },
    {
        question: 'Posso fazer uma aula experimental antes de me matricular?',
        answer: 'Sim! Oferecemos aulas experimentais para que você conheça nossa estrutura, professores e metodologia antes de tomar sua decisão.',
    },
    {
        question: 'Quais são os benefícios do boxe além da parte física?',
        answer: 'Além de melhorar o condicionamento físico, o boxe ajuda a desenvolver disciplina, concentração, autoconfiança e alívio do estresse.',
    }
];
