"use client";
import React from 'react'
import clsx from 'clsx';
import {nav_data, NavItem} from "@/data/nav/nav-data";
import Link from "next/link";
import {Transition} from "@headlessui/react";

const Nav_002_hui = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (<>
        <button
            className="md:hidden fixed right-4 top-1/2 transform -translate-y-1/2"
            onClick={toggleMenu}
        >
            {/* Replace this with your hamburger icon */}
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-current mt-1.5"></span>
        </button>


        <Transition
            show={isMenuOpen}
            className="fixed -inset-0 bg-white p-4 md:hidden flex flex-col items-center justify-center"
            enter="transition duration-200"
            enterFrom="transform scale-0"
            enterTo="transform scale-100"
            leave="transition duration-200"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-0"
        >

            <button
                className="md:hidden fixed right-4 top-1/2 transform -translate-y-1/2"
                onClick={toggleMenu}
            >

                {/* Replace this with your hamburger icon */}
                <span className="block w-6 h-0.5 bg-current"></span>
                <span className="block w-6 h-0.5 bg-current mt-1.5"></span>
                <span className="block w-6 h-0.5 bg-current mt-1.5"></span>
            </button>

            {/* Navigation links for mobile */}
            {nav_data.map((item: NavItem) => (
                <Link key={item.id} href={item.link} className={clsx({"active": item.isActive}, "block  mt-4")}>
                    {item.icon}
                    {item.label}
                </Link>
            ))}


        </Transition>

        <nav role="navigation" className="hidden md:flex w-1/2 flex-wrap justify-self-end">
            {nav_data.map((item: NavItem) => (
                <Link key={item.id} href={item.link} className={clsx({"active": item.isActive}, "ml-6")}>
                    {item.icon}
                    {item.label}
                </Link>))}
        </nav>
    </>)
}


export default Nav_002_hui
