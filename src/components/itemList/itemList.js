import React, { Component } from 'react';
import './itemList.scss';
import Spinner from '../spinner';
export default class ItemList extends Component {

    state = {
        itemList: null
    }

    /* Запрос к серверу на получение персонажей */
    componentDidMount() {
        const {getData} = this.props;

        /* Делаем независимый паттерн  */
        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    /* Создаём список персонажей */
    renderItems(arr) {
        return arr.map((item, id) => {
            // const {id} = item;
            const label = this.props.renderItem(item);
            // const {id, name} = item;
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(41 + id)}>
                    {label}
                </li> 
            );
        });
    }

    render() {

        const {itemList} = this.state;

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}