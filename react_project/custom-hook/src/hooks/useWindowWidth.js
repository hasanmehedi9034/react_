import { useCallback, useEffect, useState } from "react"

const useWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerWidth < screenSize);
    });

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            return window.removeEventListener('resize', checkScreenSize);
        }
    }, [screenSize]);

    return onSmallScreen;
}

export default useWindowWidth;