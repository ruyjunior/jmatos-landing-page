import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Come train with us! Discover how to achieve your goals in a healthy and fun way at our training center.",
    quickLinks: [
        { text: "Features", url: "#features" },
        { text: "Prices", url: "#pricing" },
        { text: "Payments", url: "#payments" },
        { text: "Team", url: "#team" },
        { text: "FAQ", url: "#faq" },
        { text: "Location", url: "#location" },
        ],
    email: 'bearcrossct2024@gmail.com',
    telephone: '+55 71 9 9985-7902',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/bearcross.ct',
    }
}