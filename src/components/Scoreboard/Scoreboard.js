import React from 'react';
import './Scoreboard.scss';
import { useSelector } from 'react-redux';
import { setScoreClass } from "../../helpers/helpers";


const Scoreboard = () => {
    const score = useSelector(state => state.score)
    const scoreClass = setScoreClass(score);

    return (
        <section className="scoreboard">
            <h1 className='title'>Sequence : A Fidget Game</h1>
            <h2 className='instruction'>Press the displayed arrow key to increase your score</h2>
            <h2 className='score'> Your Score:
                <span className={scoreClass}>{score}</span>
            </h2> 
        </section>
    )
};

export default Scoreboard;