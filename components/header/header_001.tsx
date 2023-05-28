import React from 'react'
import BrLogo from "@/components/logo/br-logo";
import Nav001 from "@/components/navbar/nav_001";
import NavButton from "@/components/navbar/button/NavButton";

const Header001 = () => {
    return (
        <header className="flex top-0  items-center justify-around w-screen bg-blue-500">
            <BrLogo />
            <Nav001 />
            <NavButton />
        </header>
    )
}
export default Header001
