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
        username: "Naman Barkiya",
        icon: 'icons/share.svg',
        link: "https://www.linkedin.com/in/naman-barkiya-015323200/",
    },
    {
        name: "Twitter",
        username: "@namanbarkiya",
        icon: 'icons/share.svg',
        link: "https://twitter.com/namanbarkiya",
    },
    {
        name: "Gmail",
        username: "naman.barkiya02",
        icon: 'icons/share.svg',
        link: "mailto:naman.barkiya02@gmail.com",
    },
];