import React, { Component } from 'react';
import './randomChar.scss';
import GotService from '../../services/GoT_service';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    /* Новая база данных */
    gotService = new GotService();

    /* Прописываем статы */
    state = {
        char: {},
        loading: true
    }

    /* Вызывается, когда компонент успешно отрисовался и появился на странице */
    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 5000);
    }

    /* Вызывается, когда компонент удалён на странице */
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });
    }

    /* Выявляем ошибку */
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    /* Обновляет нашего персонажа */
    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25); /* Рандомный персонаж начинается с 25 и заканчивается 140 */
        this.gotService.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError);
    }

    render() {
        console.log('render');
        const {char, loading, error} = this.state;

        /* Если error - true, ставлю ErrorMessage, в противном случае ничего не ставлю */
        const errorMessage = error ? <ErrorMessage/> : null;

        // /* Если loading - true, ставлю Spinner, в противном случае ничего не ставлю */
        const spinner = loading ? <Spinner/> : null;

        // /* Если loading и error - false, ставлю View, в противном случае ничего не ставлю */
        const content = !(loading || error) ? <View char={char}/> : null;

        /* Улучш. версия: Если loading - true, ставлю Spinner, в противном случае ставлю View */
        // const content = loading ? <Spinner/> : <View char={char}/>;

        return (
            <div className="random-block rounded">
                {spinner}
                {errorMessage}
                {content}
            </div>
        );
    }
}

/* Перенёс вёрстку в отдельную функцию, для правильного вида загрузки */
const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Случайный персонаж:</h4>
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
        </>
    );
}