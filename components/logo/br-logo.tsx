"use client";
import Image from "next/image";
import Link from "next/link";
import useViewportDimensions from '@/hooks/useViewportDimensions';

const BrLogo = () => {
    const { width, height } = useViewportDimensions();
    const imgWidth = width * 0.25; // 10% of viewport width
    const imgHeight = height * 0.25; // 10% of viewport height

    return (
        <Link href={"/"} className="flex object-cover">
            <Image src={"/svg/logo/br-logo.svg"} alt={"bitter Route Logo"} className={"bg-transparent"} width={imgWidth} height={imgHeight} />
        </Link>
    )
}

export default BrLogo;