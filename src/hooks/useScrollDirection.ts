import { useEffect, useState } from "react";

export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [prevOffset, setPrevOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = window.pageYOffset;

            // Al scroll hacia abajo y al pasar el height del header
            if (currentOffset > prevOffset && currentOffset > 100) {
                setScrollDirection("down");
            } else if (currentOffset < prevOffset) {
                setScrollDirection("up");
            }

            setPrevOffset(currentOffset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevOffset]);

    return scrollDirection;
};
