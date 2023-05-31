"use client";
import React, {useEffect} from 'react';
import Link from "next/link";
import {motion, useAnimation} from 'framer-motion';
import LogoFC from "@/components/logo/logoFC";

const BrLogo: React.FC = () => {
    const controls = useAnimation();


    useEffect(() => {
        const sequence = async () => {
            // Spin animation
            await controls.start({rotate: 360, transition: {duration: 2}});
            controls.set({rotate: 0});

            // Bounce animation
            await controls.start({y: ["0%", "50%", "0%"], transition: {duration: 2, yoyo: Infinity}});

            // Pulse animation
            await controls.start({scale: [1, 1.5, 1], transition: {duration: 2, yoyo: Infinity}});
        }

        sequence();
    }, [controls]);

    return (<Link href={"/"} passHref>
            <motion.div layout className="flex" animate={controls}>
                <div style={{
                    position: 'relative',
                    maskImage: 'url(/svg/logo/br-logo.svg)'
                }}>
                    <LogoFC/>
                    <video
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            mixBlendMode: 'screen',
                        }}
                        autoPlay
                        loop
                        muted
                        src="/video/AdobeStock_122654532_20s_loop_static_effect.mp4"
                    />
                </div>
            </motion.div>
        </Link>

    )
}

export default BrLogo;