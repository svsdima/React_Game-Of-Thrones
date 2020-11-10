import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

import './app.scss';

export default class App extends Component {
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
                </Container>
            </Container>
        );
    }
}