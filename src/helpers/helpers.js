import { useState, useEffect } from 'react';

export const useKeyCode = (targetKey) => {
    const [isKeyPressed, setKeyPressed] = useState();
    // Only allow fetching each keypress event once to prevent infinite loops
    if (isKeyPressed) {
        setKeyPressed(false);
    }

    useEffect(() => {
        function downHandler({ key }) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        }
        window.addEventListener('keydown', downHandler);
        return () => window.removeEventListener('keydown', downHandler);
    }, [targetKey]);

    return isKeyPressed;
}

export const selectRandomArrow = () => {
    const randIndex = Math.floor(Math.random() * 4);
    const arrows = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
    return arrows[randIndex];
}