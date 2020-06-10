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

export const selectRandomArrow = (currentArrow) => {
    const arrows = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
    const currentArrowIndex = arrows.indexOf(currentArrow);
    //remove current arrow to avoid repeating
    arrows.splice(currentArrowIndex, 1)
    const randIndex = Math.floor(Math.random() * 3);
    return arrows[randIndex];
}

export const setScoreClass = (score) => {
    switch (score) {
        case score >= 20:
            return 'twenty';
        case score >= 40:
            return 'fourty';
        case score >= 60:
            return 'sixty';
        default:
            return '';
    }
}