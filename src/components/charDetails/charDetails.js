import React, {Component} from 'react';
import './charDetails.scss';
import GotService from '../../services/GoT_service';
import Spinner from '../spinner';

const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}

export {
    Field
}
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

        const {char} = this.state;
        const {name} = char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }
                </ul>
            </div>
        );
    }
}