import React from 'react';
import './Scoreboard.scss';
import { useSelector } from 'react-redux'

const Scoreboard = () => {
    const score = useSelector(state => state.score)

    return (
        <section className="scoreboard">
            <h1>{score}</h1> 
        </section>
    )
};

export default Scoreboard;