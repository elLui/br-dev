import generateUniqueId from "@/utils/generateUniqueId";
import Image from "next/image";




type NavItem = {
    id: string;
    label: string;
    link: string;
    isActive: boolean;
    icon: JSX.Element;
};

export const nav_data :NavItem[] = [

    {
        id: generateUniqueId(),
        label: "home",
        link: "/",
        isActive: true,
        icon: <Image src={"/svg/icons/home.svg"} width={24} height={24} alt={"home"}/>,

    },

    {
        id: generateUniqueId(),
        label: "about",
        link: "/about",
        isActive: false,
        icon: <Image src={"/svg/icons/user.svg"} width={24} height={24} alt={"about"}/>,

    }, {
        id: generateUniqueId(),
        label: "contact",
        link: "/about/contact",
        isActive: false,
        icon: <Image src={"/svg/icons/info.svg"} width={24} height={24} alt={"contact"}/>,

    }, {
        id: generateUniqueId(),
        label: "projects",
        link: "/projects",
        isActive: false,
        icon: <Image src={"/svg/icons/table.svg"} width={24} height={24} alt={"projects"}/>,

    }, {
        id: generateUniqueId(),
        label: "blog",
        link: "/blog",
        isActive: false,
        icon: <Image src={"/svg/icons/book-open.svg"} width={24} height={24} alt={"blog"}/>,

    },


]

