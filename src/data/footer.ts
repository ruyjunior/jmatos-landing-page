import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Vem treinar com a gente! Descubra como alcançar seus objetivos de forma saudável e divertida na nossa academia.",
    quickLinks: [
        { text: "Features", url: "#features" },
        { text: "Team", url: "#team" },
        { text: "Shedules", url: "#shedules" },
        { text: "Prices", url: "#pricing" },
        { text: "News", url: "#news" },
        { text: "Location", url: "#location" },
        { text: "FAQ", url: "#faq" },
        ],
    email: 'address@yoursite.com',
    telephone: '+55 (51) 99740-5047',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/nobreboxeclub',
    }
}