
import React, { Component } from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import {
    FaLinkedinIn, 
    FaGithubAlt,
    FaDribbble,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";

export default class Contact extends Component {
    render() {
        return (
            <>
                <Row className='pad-5 justify-content-center hard-center'>
                    <Col className='pad-5 justify-content-center'>
                        <Card className="contact-card bg-ws card-shadow" style={{width: '40rem'}}>
                            <Card.Header className="text-center">My Contact Card</Card.Header>
                            <Card.Body className="bg-ws text-center">
                                <Card.Text>
                                    <Row>
                                        <Col className="bg-ws">
                                        Email:
                                        </Col>
                                        <Col className="bg-ws">
                                        in.monishde@gmail.com
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="bg-ws">
                                        Phone:
                                        </Col>
                                        <Col className="bg-ws">
                                        +91 7358098160
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="bg-ws">
                                        Social Accounts:
                                        </Col>
                                        <Col className="bg-ws">
                                            <a className="p-1" target="blank" href="https://www.linkedin.com/in/monishde6/"><FaLinkedinIn className="bg-ws"></FaLinkedinIn></a>
                                            <a className="p-1" target="blank" href="https://github.com/demonish6"><FaGithubAlt className="bg-ws"></FaGithubAlt></a>
                                            <a className="p-1" target="blank" href="https://dribbble.com/monishde6"><FaDribbble className="bg-ws"></FaDribbble></a>
                                            <a className="p-1" target="blank" href="https://twitter.com/monishde6"><FaTwitter className="bg-ws"></FaTwitter></a>
                                            <a className="p-1" target="blank" href="https://instagram.com/monishde6"><FaInstagram className="bg-ws"></FaInstagram></a>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted"></Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}
