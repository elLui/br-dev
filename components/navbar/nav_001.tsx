"use client";
import React from 'react'
import clsx from 'clsx';
import {nav_data, NavItem} from "@/data/nav/nav-data";
import Link from "next/link";

const Nav001 = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div className="hidden md:flex w-1/2 flex-wrap justify-self-end">
            {nav_data.map((item: NavItem) => (
                <Link key={item.id} href={item.link} className={clsx({"active": item.isActive}, "ml-6")}>
                    {item.icon}
                    {item.label}
                </Link>
            ))}
        </div>
    )
}
export default Nav001
