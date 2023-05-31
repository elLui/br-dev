"use client";
import Image from "next/image";
import Link from "next/link";
import useViewportDimensions from '@/hooks/useViewportDimensions';

const BrLogo = () => {
    const {width, height} = useViewportDimensions();
    const imgWidth = Math.max(50, Math.min(width * 0.25, 300)); // Ensures width is between 50 and 200, 10% of viewport width
    const imgHeight = Math.max(50, Math.min(height * 0.25, 300)); // Ensures height is between 50 and 200, 10% of viewport height

    return (
        <Link href={"/"} className="flex">
            <Image src={"/svg/logo/br-logo.svg"} alt={"bitter Route Logo"} className={"bg-transparent"} width={imgWidth}
                   height={imgHeight}/>
        </Link>
    )
}

export default BrLogo;