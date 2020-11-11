import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GoT_service';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {
    /* Новая база данных */
    gotService = new GotService();

    state = {
        error: false
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

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId);
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name} />
        )
    }
}

export default withRouter(BookPage);