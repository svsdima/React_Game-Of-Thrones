import React, { Component } from 'react';
import './randomChar.scss';

export default class RandomChar extends Component {
    render() {
        return (
            <div className="random-block rounded">
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Пол: </span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Дата рождения: </span>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Дата смерти: </span>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Культура: </span>
                        <span>first</span>
                    </li>
                </ul>
            </div>
        );
    }
}