"use client";
import { useState, useEffect } from 'react';

interface Dimensions {
    width: number;
    height: number;
}

const useViewportDimensions = (): Dimensions => {
    const [dimensions, setDimensions] = useState<Dimensions>({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return dimensions;
};

export default useViewportDimensions;
