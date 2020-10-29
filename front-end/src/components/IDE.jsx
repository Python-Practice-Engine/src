import React from 'react';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardText,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';
import Header from './Header';
import GNavbar from './GNavbar';
import Skulpt from './Skulpt';

import '../style/style.css';

const IDE = () => {
    return (
        <div>
            {/* header */}
            <Header></Header>
            {/* navbar */}
            <GNavbar></GNavbar>
            {/* IDE/Question */}
            <Row>
                <Col md="3" className="question-col">
                    <Card>
                        <CardBody>
                        <CardTitle>Addition Calculator</CardTitle>
                        <hr/>
                        <CardText>
                        <Badge color="primary" pill>Functions</Badge>
                        <Badge color="warning" pill>Easy</Badge>
                        <p>
                        Write a function which takes two parameters, adds them together, and returns the result
                        </p> 

                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Row className="ide-row">
                    <Skulpt></Skulpt>                    
                    </Row>
                    <h4>Test Cases</h4>
                    <Row className="test-case-row" >
                        <ListGroup style={{width:'100%'}}>
                            <ListGroupItem>
                                Test Case #1
                                <span className="float-right"><Badge color="success" pill>Passed</Badge></span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Test Case #2
                                <span className="float-right"><Badge color="success" pill>Passed</Badge></span>
                            </ListGroupItem>
                            {/* <ListGroupItem>
                                Test Case #3
                                <span className="float-right"><Badge color="danger" pill>Failed</Badge></span>
                            </ListGroupItem> */}
                        </ListGroup>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};


export default IDE;
