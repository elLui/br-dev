import generateUniqueId from "@/utils/generateUniqueId";
import Image from "next/image";


export type NavItem = {

    id: string;
    label: string;
    link: string;
    isActive: boolean;
    icon: JSX.Element;
    activeIcon: JSX.Element;
};

export const nav_data: NavItem[] = [{
    id: generateUniqueId(),
    label: "BAND",
    link: "/about",
    isActive: false,
    icon: <Image src={"/svg/icons/user.svg"} width={24} height={24} alt={"band-icon"}/>,
    activeIcon: <Image src={"/svg/icons/user.svg"} width={24} height={24} alt={"band-icon-active"}/>,

}, {
    id: generateUniqueId(),
    label: "CONTACT",
    link: "/about/contact",
    isActive: false,
    icon: <Image src={"/svg/icons/fist-hand-contact.svg"} width={24} height={24} alt={"contact-icon"}/>,
    activeIcon: <Image src={"/svg/icons/fist-hand-contact-active.svg"} width={24} height={24} alt={"contact-icon-active"}/>,

}, {
    id: generateUniqueId(),
    label: "MUSIC",
    link: "/projects",
    isActive: false,
    icon: <Image src={"/svg/icons/record-hand-music.svg"} width={24} height={24} alt={"music-icon"}/>,
    activeIcon: <Image src={"/svg/icons/record-hand-music-active.svg"} width={24} height={24} alt={"music-icon-active"}/>,


}, {
    id: generateUniqueId(),
    label: "SHOWS",
    link: "/shows",
    isActive: false,
    icon: <Image src={"/svg/icons/humic-body-show.svg"} width={24} height={24} alt={"shows-icon"}/>,
    activeIcon: <Image src={"/svg/icons/humic-body-show-active.svg"} width={24} height={24} alt={"shows-icon-active"}/>,


}, {
    id: generateUniqueId(),
    label: "HOME",
    link: "/",
    isActive: true,
    icon: <Image src={"/svg/icons/rock-hand-home.svg"} width={24} height={24} alt={"home-icon"}/>,
    activeIcon: <Image src={"/svg/icons/rock-hand-home-active.svg"} width={24} height={24} alt={"home-icon-active"}/>,
},]