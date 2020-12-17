import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default class Intro extends Component {
    render() {
        return (
            <div className="row pad-5">
                <Container>
                    <Row>
                        <Col className="pad-5">
                            <div className="col intro-statement text-white">
                                <h1>Hi, I am Monish De.</h1><br></br>
                                <h3>I am a Full Stack Web Developer by day and a Gamer by night.</h3>
                            </div>
                        </Col>
                        <Col className="pad-5 carousel-container">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block illustration"
                                        src={process.env.PUBLIC_URL + '/images/Programmer.png'}
                                        alt="Programmer"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block gamer"
                                        src={process.env.PUBLIC_URL + '/images/Gamer.png'}
                                        alt="Gamer"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}