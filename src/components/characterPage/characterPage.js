import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetail, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GoT_service';
import RowBlock from '../rowBlock';
import './characterPage.scss';

export default class CharacterPage extends Component {

    /* Новая база данных */
    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    /* Устанавливаем id в выбранном персонаже */
    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
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
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`} />
        )
        
        /* Подробное описание */
        const charDetail = (
            <CharDetail charId={this.state.selectedChar}>
                <Field field='gender' label='Пол:' />
                <Field field='born' label='Дата рождения:' />
                <Field field='died' label='Дата смерти:' />
                <Field field='culture' label='Культура:' />
            </CharDetail>
        )

        return (
            <RowBlock left={itemList} right={charDetail}/>
        )
    }
}