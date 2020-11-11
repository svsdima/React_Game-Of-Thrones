import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, HousePage, BookPage} from '../pages';
import GotService from '../../services/GoT_service';

import './app.scss';

export default class App extends Component {

    /* Новая база данных */
    gotService = new GotService();

    state = {
        showRandomChar: true,
        error: false
    }

    /* Ошибка */
    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    /* Показ/Скрытие случайного персонажа */
    toggleRandomCharacter = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        /* Если появилась ошибка, вывести сообщение об ошибке */
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Container> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='5'>
                            <button 
                            className="toggle-button"
                            onClick={this.toggleRandomCharacter} >Случайный персонаж</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <HousePage/>
                    <BookPage/>
                    {/* <Row>
                        <Col md='5'>
                            <ItemList
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => `${item.name}`} />
                        </Col>
                        <Col md='7'>
                            <ItemDetail charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='5'>
                            <ItemList
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllHouses}
                            renderItem={(item) => `${item.name}`} />
                        </Col>
                        <Col md='7'>
                            <ItemDetail charId={this.state.selectedChar} />
                        </Col>
                    </Row> */}
                </Container>
            </Container>
        );
    }
}