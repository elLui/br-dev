import React from 'react'
import clsx from "clsx";
import Br_logo_hui from "@/components/logo/br_logo_hui";
import Nav_002_hui from "@/components/navbar/nav_002_hui";

const Header002Hui = () => {
    return (
        <header role="banner" className={clsx("sticky top-0 bg-gradient-to-b from-transparent to-95% via-flannel-red to-violet-500 to-80% p-2")}>
            <div className="flex items-center justify-around w-screen">
                <Br_logo_hui/>
                <Nav_002_hui/>
            </div>

        </header>
    )
}
export default Header002Hui
