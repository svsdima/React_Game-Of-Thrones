import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetail, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GoT_service';
import RowBlock from '../rowBlock';

export default class BookPage extends Component {
    /* Новая база данных */
    gotService = new GotService();

    state = {
        selectedBook: 10,
        error: false
    }

    /* Устанавливаем id в выбранном персонаже */
    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    /* Ошибка */
    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {

        /* Если появилась ошибка, вывести сообщение об ошибке */
        if (this.state.error) {
            return <ErrorMessage/>
        }

        /* Список */
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name} />
        )
        
        /* Подробное описание */
        const itemDetail = (
            <ItemDetail 
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse} >
                <Field field='numberOfPages' label='Кол-во страниц:' />
            </ItemDetail>
        )

        return (
            <RowBlock left={itemList} right={itemDetail}/>
        )
    }
}