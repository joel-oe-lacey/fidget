import React, { useState } from 'react';
import './Game.scss';
import arrow from "../../assets/arrow.svg";
import { useKeyCode, selectRandomArrow } from "../../helpers/helpers";
import { useDispatch } from 'react-redux';
import { setScore } from '../../actions';

const Game = () => {
    const dispatch = useDispatch()
    const [currentArrow, updateArrow] = useState("ArrowDown");
    const correctArrowPressed = useKeyCode(currentArrow);

    if (correctArrowPressed) {
        const newArrow = selectRandomArrow();
        updateArrow(newArrow);
        dispatch(setScore());
    }

    return (
            <section className="game">
                <img 
                    src={arrow}
                    className={`game-arrow ${currentArrow}`}
                    alt="Directional arrow"
                />
            </section>
        )
};

export default Game;
