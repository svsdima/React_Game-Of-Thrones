import React, {Component} from 'react';
import './charDetails.scss';
export default class CharDetail extends Component {
    render() {
        return (
            <div className="char-details rounded">
                <h4>John Snow</h4>
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