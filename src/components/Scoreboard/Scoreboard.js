import React from 'react';
import './Scoreboard.scss';
import { useSelector } from 'react-redux'

const Scoreboard = () => {
    const score = useSelector(state => state.score)

    return (
        <section className="scoreboard">
            <h1 className='title'>Sequence : A Fidget Game</h1>
            <h2 className='instruction'>Press the displayed arrow key to increase your score</h2>
            <h2 className='score'>{`Your Score: ${score}`}</h2> 
        </section>
    )
};

export default Scoreboard;