import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetail, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GoT_service';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {
    /* Новая база данных */
    gotService = new GotService();

    state = {
        selectedHouse: 25,
        error: false
    }

    /* Устанавливаем id в выбранном персонаже */
    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name} />
        )
        
        /* Подробное описание */
        const itemDetail = (
            <ItemDetail 
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse} >
                <Field field='region' label='Регион:' />
                <Field field='words' label='Слов:' />
                <Field field='titles' label='Заглавий'/>
                <Field field='ancestralWeapons' label='Родовое Оружие'/>
            </ItemDetail>
        )

        return (
            <RowBlock left={itemList} right={itemDetail}/>
        )
    }
}