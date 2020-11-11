import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, HousePage, BookPage, BookItem} from '../pages';
import GotService from '../../services/GoT_service';
/* React Router */
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
            <Router>
                <div className="app">
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

                    <Route path='/characters' exact component={CharacterPage} /> 
                    <Route path='/houses' exact component={HousePage} /> 
                    <Route path='/books' exact component={BookPage} /> 
                    <Route path='/books/:id' render={
                        ({match}) => { 
                            const {id} = match.params;
                            return <BookItem bookId={id} />}
                    } /> 

                </Container>
                </Container>
                </div>
            </Router>
        );
    }
}