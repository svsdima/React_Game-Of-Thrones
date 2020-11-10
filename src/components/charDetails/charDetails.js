import React, {Component} from 'react';
import './charDetails.scss';
import GotService from '../../services/GoT_service';
import Spinner from '../spinner';
export default class CharDetail extends Component {

    /* Новая база данных */
    gotService = new GotService();

    state = {
        char: null
    }

    /* При обновлении компонента вызываем обновление персонажа */
    componentDidMount() {
        this.updateChar();
    }

    /* Проверка на совпадение с предыдущим пропсом */
    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    /* Обновление персонажа */
    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            });

        // this.foo.bar = 0;
    }

    render() {

        if (!this.state.char) {
            return <span className="select-error">Пожалуйста выберите персонажа</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Пол: </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Дата рождения: </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Дата смерти: </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Культура: </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}