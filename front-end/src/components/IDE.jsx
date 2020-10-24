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
                        <CardTitle>Question title</CardTitle>
                        <hr/>
                        <CardText>
                        <Badge color="primary" pill>Loops</Badge>
                        <Badge color="warning" pill>Medium</Badge>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut rutrum odio pulvinar, pulvinar tellus quis, ullamcorper nisi. 
                            Aliquam tristique nibh condimentum, lacinia sapien vel, 
                            tempus justo. Integer eu massa ligula. Donec sodales ligula mi,
                            at varius nisl tincidunt quis. Aenean at felis nibh. Nullam 
                            auctor quis nisi malesuada ultricies. Curabitur lobortis 
                            porttitor ex, et dictum nisl auctor eu. Etiam gravida 
                            massa vitae urna volutpat, vel volutpat orci sagittis. 
                            Class aptent taciti sociosqu ad litora torquent per 
                            conubia nostra, per inceptos himenaeos. Aliquam 
                            semper egestas scelerisque. Sed vel dignissim sapien.
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
                            <ListGroupItem>
                                Test Case #3
                                <span className="float-right"><Badge color="danger" pill>Failed</Badge></span>
                            </ListGroupItem>
                        </ListGroup>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};


export default IDE;
