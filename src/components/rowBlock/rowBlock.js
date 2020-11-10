import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import './rowBlock.scss';

/* Вынес постройку списка в отдельную функцию */
const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='5'>
                {left}
            </Col>
            <Col md='7'>
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;