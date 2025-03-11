import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Are the workouts at ${siteDetails.siteName} suitable for beginners?`,
        answer: 'Yes! Our workouts are adaptable for all levels, from beginners to advanced athletes. You will progress at your own pace with professional guidance.',
    },
    {
        question: 'Do I need my own equipment to train?',
        answer: 'It is not mandatory. We provide the necessary equipment for training, but we recommend having your own items, such as gloves and grips, for better comfort and hygiene.',
    },
    {
        question: 'Does CrossFit help with weight loss and fitness conditioning?',
        answer: `Absolutely! CrossFit workouts combine high-intensity exercises that accelerate fat burning, improve overall fitness, and increase muscle strength.`,
    },
    {
        question: 'Can I take a trial class before signing up?',
        answer: 'Yes! We offer trial classes so you can experience our facilities, methodology, and coaches before starting your CrossFit journey.',
    },
    {
        question: 'What are the benefits of CrossFit beyond physical fitness?',
        answer: 'In addition to improving physical fitness, CrossFit promotes discipline, focus, teamwork, self-confidence, and mental well-being.',
    }
];
