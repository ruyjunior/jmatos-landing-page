import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Os treinos na ${siteDetails.siteName} são indicados para iniciantes?`,
        answer: 'Sim! Nossos treinos são adaptáveis para todos os níveis, desde iniciantes até atletas avançados. Você evoluirá no seu ritmo, sempre com orientação profissional.',
    },
    {
        question: `Preciso de equipamento próprio para treinar?`,
        answer: 'Não é obrigatório. Disponibilizamos equipamentos necessários para os treinos, mas recomendamos que você tenha seus próprios itens, como luvas e grips, para maior conforto e higiene.',
    },
    {
        question: 'O CrossFit ajuda no emagrecimento e condicionamento físico?',
        answer: `Com certeza! Os treinos de CrossFit combinam exercícios de alta intensidade que aceleram a queima de gordura, melhoram o condicionamento físico e aumentam a força muscular.`,
    },
    {
        question: 'Posso fazer uma aula experimental antes de me matricular?',
        answer: 'Sim! Oferecemos aulas experimentais para que você conheça nosso espaço, metodologia e treinadores antes de iniciar sua jornada no CrossFit.',
    },
    {
        question: 'Quais são os benefícios do CrossFit além da parte física?',
        answer: 'Além de melhorar o condicionamento físico, o CrossFit promove disciplina, foco, espírito de equipe, autoconfiança e bem-estar mental.',
    }
];
