import React from 'react'
import Image from "next/image";

const NavButton = () => {
    return (
        <button className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-42 2xl:h-42 3xl:w-48 3xl:h-48 4xl:w-56 4xl:h-56 5xl:w-64 5xl:h-64 6xl:w-72 6xl:h-72 7xl:w-80 7xl:h-80  flex object-cover md:hidden">
            <Image src={"/svg/icons/x-mark2.svg"} alt={"nav button"} className={"bg-transparent"} width={200} height={200} />
        </button>
    )
}
export default NavButton
