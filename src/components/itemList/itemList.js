import React, { Component } from 'react';
import './itemList.scss';
import GotService from '../../services/GoT_service';
import Spinner from '../spinner';
export default class ItemList extends Component {

    /* Новая база данных */
    gotService = new GotService();

    state = {
        charList: null
    }

    /* Запрос к серверу на получение персонажей */
    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList
                });
            });
    }

    /* Создаём список персонажей */
    renderItems(arr) {
        return arr.map((item, i) => {
            // const {id, name} = item;
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li> 
            );
        });
    }

    render() {

        const {charList} = this.state;

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}