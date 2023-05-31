import generateUniqueId from "@/utils/generateUniqueId";
import {
    GiAlienBug,
    GiAlienEgg,
    GiMeepleGroup,
    GiMicrophone,
    GiMusicalNotes,
    GiMusicSpell,
    GiRock,
} from "react-icons/gi";


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
    link: "/band",
    isActive: false,
    icon: <GiMeepleGroup/>,
    activeIcon: <GiMeepleGroup/>,
}, {
    id: generateUniqueId(),
    label: "CONTACT",
    link: "/contact",
    isActive: false,
    icon: <GiAlienBug/>,
    activeIcon: <GiAlienEgg/>,
}, {
    id: generateUniqueId(),
    label: "MUSIC",
    link: "/music",
    isActive: false,
    icon: <GiMusicSpell/>,
    activeIcon: <GiMusicalNotes/>,
}, {
    id: generateUniqueId(),
    label: "SHOWS",
    link: "/shows",
    isActive: false,
    icon: <GiMicrophone/>,
    activeIcon: <GiRock/>,
},
]