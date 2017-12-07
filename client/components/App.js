import React from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Counter from '../containers/Counter.js';
import AddCounter from '../containers/AddCounter.js';
import RemoveCounter from '../containers/RemoveCounter.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>1.1</Col>
                        <Col>1.2</Col>
                        <Col>1.3</Col>
                        <Col>1.4</Col>
                    </Row>
                    <Row>
                        <Col>2.1</Col>
                        <Col>2.2</Col>
                        <Col>2.3</Col>
                        <Col>2.4</Col>
                    </Row>
                    <Row>
                        <Col>3.1</Col>
                        <Col>3.2</Col>
                        <Col>3.3</Col>
                        <Col>3.4</Col>
                    </Row>
                    <Row>
                        <Col>4.1</Col>
                        <Col>4.2</Col>
                        <Col>4.3</Col>
                        <Col>4.4</Col>
                    </Row>
                    <Row>
                        <div className="container">
                            <Counter></Counter><br />
                            <div className="columns">
                                <div className="column is-11">
                                    <AddCounter></AddCounter>
                                </div>
                                <div className="column auto">
                                    <RemoveCounter></RemoveCounter>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}
