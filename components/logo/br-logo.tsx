"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';

const BrLogo: React.FC = () => {
    const controls = useAnimation();


    useEffect(() => {
        const sequence = async () => {
            // Spin animation
            await controls.start({ rotate: 360, transition: { duration: 2 } });
            controls.set({ rotate: 0 });

            // Bounce animation
            await controls.start({ y: ["0%", "50%", "0%"], transition: { duration: 2, yoyo: Infinity } });

            // Pulse animation
            await controls.start({ scale: [1, 1.5, 1], transition: { duration: 2, yoyo: Infinity } });
        }

        sequence();
    }, [controls]);

    return (
        <Link href={"/"} passHref>
            <motion.div className="flex object-fill" animate={controls}>
                <Image src={"/svg/logo/br-logo.svg"} alt={"bitter Route Logo"} className={"bg-transparent"} width={200} height={200} />
            </motion.div>
        </Link>
    )
}

export default BrLogo;
