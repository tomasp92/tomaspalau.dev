import { useEffect } from 'react';
import { useState } from 'react';

const sizes = {
    XL: 1600,
    LL: 1400,
    LM: 1025,
    T: 750,
    ML: 500,
    MM: 400,
    MS: 0
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(null)
    
    window.onresize = () =>{
        setWindowWidth(window.screen.width)
    }

    return windowWidth
}

export { sizes, useWindowWidth }