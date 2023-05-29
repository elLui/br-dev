"use client";
import {useState, useEffect} from 'react';

interface Dimensions {
    width: number;
    height: number;
}

const useViewportDimensions = (): Dimensions => {

    // due to SSR, window is not defined on the server
    const isClient = typeof window === 'object';

    const [dimensions, setDimensions] = useState<Dimensions>(isClient ? {
        width: window.innerWidth,
        height: window.innerHeight
    } : {width: 0, height: 0});

    useEffect(() => {
        if (!isClient) {
            // if SSR, return here
            return;
        }

        const handleResize = () => {
            setDimensions({width: window.innerWidth, height: window.innerHeight});
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty array ensures that effect is only run on mount and un mount

    return dimensions;
};

export default useViewportDimensions;
