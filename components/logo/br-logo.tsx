import React from 'react'
import Image from "next/image";

const BrLogo = () => {
    return (
        <div>
            <Image src={"/svg/logo/br-logo.svg"} alt={"bitter Route Logo"} width={200} height={200}  className={"bg-blue-300"} />
        </div>
    )
}
export default BrLogo