import React from 'react'

const BgVid = () => {
    return (
        <>
            <video src="/video/AdobeStock_122654532_20s_loop_static_effect.mp4"
                   autoPlay={true}
                   muted={true}
                   loop={true}
                   className={"absolute object-cover w-full h-full z-0"}
            />

        </>
    )
}
export default BgVid
