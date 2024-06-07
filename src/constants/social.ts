import { Icons } from "@/components/Icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "LinkedIn",
        username: "Anish Awasthi",
        icon: '/icons/linkedin.svg',
        link: "https://www.linkedin.com/in/anish-awasthi-213106287/",
    },
    {   
        name: "Twitter",
        username: "@AnishAwasthi005",
        icon: 'icons/twitter.svg',
        link: "https://x.com/AnishAwasthi005",
    },
    {
        name: "Gmail",
        username: "anishawasthi16@gmail.com",
        icon: 'icons/gmail.svg',
        link: "mailto: anishawasthi16@gmail.com",
    },
];