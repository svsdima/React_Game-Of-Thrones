import React, { Component } from 'react';
import GotService from '../../services/GoT_service';
import ItemDetail, {Field} from '../itemDetails';

export default class BookItem extends Component {

    /* Новая база данных */
    gotService = new GotService();



    render() {
        return (
            <ItemDetail 
            itemId={this.props.bookId}
            getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Кол-во страниц:' />
            </ItemDetail>
        )
    }
}