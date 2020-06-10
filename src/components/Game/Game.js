import React, { Component } from 'react';
import './Game.scss';
import arrow from "../../assets/arrow.svg";

export default class Game extends Component {
    constructor() {
        super()
        this.state = {};
    }

    render() {
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
}

