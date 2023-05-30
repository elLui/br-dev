import React from 'react'
import BrLogo from "@/components/logo/br-logo";
import Nav001 from "@/components/navbar/nav_001";


const Header001 = () => {
    return (
        <header className="sticky top-0 bg-gradient-to-b from-accented-dark-red to-95% to-transparent">
            <div className="flex  items-center justify-around w-screen ">

                <BrLogo/>
                <Nav001/>
            </div>
        </header>
    )
}
export default Header001
