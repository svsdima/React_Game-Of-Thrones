import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import ItemList from '../itemList';
import CharDetail from '../charDetails';
import RandomChar from '../randomChar';
import updateChar from '../randomChar';

import './app.scss';

export default class App extends Component {
    state = {
        showRandomChar: true,
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
                    <Row>
                        <Col md='5'>
                            <ItemList />
                        </Col>
                        <Col md='7'>
                            <CharDetail />
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}