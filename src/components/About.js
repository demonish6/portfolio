import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import TimeLine from './Timeline';
import { IconContext } from 'react-icons';
import {
    FaAngular,
    FaReact,
    FaHtml5,
    FaCss3,
    FaJs,
    FaAdobe
} from 'react-icons/fa';

import { SiMongodb } from 'react-icons/si';

export default class About extends Component {
    render() {
        return (
            <>
                <TimeLine></TimeLine>
                <h2 className="text-center text-ws">My Skills</h2>
                <IconContext.Provider value={{ color: "whitesmoke", size: "5em" }}>
                    <Row className="text-center">
                        <Col>
                            <FaAngular className="m-5"></FaAngular>
                            <FaReact className="m-5"></FaReact>
                            <FaHtml5 className="m-5"></FaHtml5>
                            <FaCss3 className="m-5"></FaCss3>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <FaJs className="m-5"></FaJs>
                            <FaAdobe className="m-5"></FaAdobe>
                            <SiMongodb className="m-5"></SiMongodb>
                        </Col>
                    </Row>
                </IconContext.Provider>
            </>
        )
    }
}
