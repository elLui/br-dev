import generateUniqueId from "@/utils/generateUniqueId";
import Image from "next/image";


export type NavItem = {
    id: string;
    label: string;
    link: string;
    isActive: boolean;
    icon: JSX.Element;
};

export const nav_data :NavItem[] = [

    {
        id: generateUniqueId(),
        label: "BAND",
        link: "/about",
        isActive: false,
        icon: <Image src={"/svg/icons/user.svg"} width={24} height={24} alt={"band-icon"}/>,

    }, {
        id: generateUniqueId(),
        label: "CONTACT",
        link: "/about/contact",
        isActive: false,
        icon: <Image src={"/svg/icons/info.svg"} width={24} height={24} alt={"contact-icon"}/>,

    }, {
        id: generateUniqueId(),
        label: "MUSIC",
        link: "/projects",
        isActive: false,
        icon: <Image src={"/svg/icons/table.svg"} width={24} height={24} alt={"projects-icon"}/>,

    }, {
        id: generateUniqueId(),
        label: "GIGS",
        link: "/blog",
        isActive: false,
        icon: <Image src={"/svg/icons/book-open.svg"} width={24} height={24} alt={"blog-icon"}/>,

    },     {
        id: generateUniqueId(),
        label: "HOME",
        link: "/",
        isActive: true,
        icon: <Image src={"/svg/icons/home.svg"} width={24} height={24} alt={"home-icon"}/>,

    },


]

