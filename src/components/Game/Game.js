import React from 'react';
import './Game.scss';
import arrow from "../../assets/arrow.svg";
import { useKeyPress } from "../../helpers/helpers";
import { useDispatch } from 'react-redux';
import { setScore } from '../../actions';

const Game = () => {
    const dispatch = useDispatch()
    const leftKey = useKeyPress('ArrowLeft');

    if(leftKey) {
        dispatch(setScore(2))
    }

    return (
            <section className="game">
                <img 
                    src={arrow}
                    className="game-arrow" 
                    alt="Directional arrow"
                />
            </section>
        )
};

export default Game;
