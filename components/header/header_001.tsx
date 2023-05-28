import React from 'react'
import BrLogo from "@/components/logo/br-logo";
import Nav001 from "@/components/navbar/nav_001";
import NavButton from "@/components/navbar/button/NavButton";

const Header001 = () => {
    return (
        <header className="sticky top-0">
            <div className="flex  items-center justify-around w-screen bg-gradient-to-b from-accented-dark-red to-85% to-transparent">

            <BrLogo />
            <Nav001 />
            <NavButton />
            </div>
        </header>
    )
}
export default Header001
