import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetail from '../charDetails';
import ErrorMessage from '../errorMessage';
import './characterPage.scss';

export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    /* Устанавливаем id в выбранном персонаже */
    onCharSelected = (id) => {
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

        return (
            <Row>
            <Col md='5'>
                <ItemList
                onCharSelected={this.onCharSelected} />
            </Col>
            <Col md='7'>
                <CharDetail charId={this.state.selectedChar} />
            </Col>
        </Row>
        )
    }
}