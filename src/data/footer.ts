import { IMenuItem, ISocials } from "@/types";
import { menuItems } from "./menuItems";
import { siteDetails } from "./siteDetails";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    address: string;
    socials: ISocials;
} = {
    subheading: siteDetails.metadata.description,
    quickLinks: menuItems,
    email: 'adv.josiasmatos@gmail.com',
    telephone: '+5575991017938',
    address: 'Rua Vitorino Siqueira Moutinho, 04  Castelo branco, Salvador Bahia, CEP 41320-600',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        //youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/josiasmatosadvocacia',
    }
}


/*
CNPJ (vou fazer) tenho um mas é da empresa de cursos profissionalizantes 

Nome fantasia JMatos advocacia / Josias Matos Advocacia / JM advocacia 

Contatos 
E-mail adv.josiasmatos@gmail.com
Telefone 7591017938
Instagram josiasmatosadvocacia
Linkedin (vou fazer )
YouTube (vou fazer)
Tik tok (vou fazer)

Endereço Rua B, n• 4, 2• andar, 1• etapa de castelo branco, salvador/ba, CEP 41320-590
Rua Vitorino Siqueira Moutinho - Número 04 - 02 Andar - (Em frente a Agrowal - Castelo Branco, Salvador - BA, 41320-600
Equipe: Josias Matos

*/