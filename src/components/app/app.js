import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import ItemList from '../itemList';
import CharDetail from '../charDetails';
import RandomChar from '../randomChar';

import './app.scss';

const App = () => {
  return (
    <Container> 
        <Container>
            <Header />
        </Container>
        <Container>
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    <RandomChar/>
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

export default App;
