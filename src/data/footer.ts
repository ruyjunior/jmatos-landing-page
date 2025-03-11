import { IMenuItem, ISocials } from "@/types";
import { menuItems } from "./menuItems";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    address: string;
    socials: ISocials;
} = {
    subheading: "some impactful phrase",
    quickLinks: menuItems,
    email: 'empresa@dominio.com',
    telephone: '+55 99 9 9999-9999',
    address: 'Brasil',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/',
    }
}