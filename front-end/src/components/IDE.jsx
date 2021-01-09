import React from 'react';
import {
  Row,
  Col,
  CardTitle,
  CardText,
  CardBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import {
    Card,
    Badge,
} from 'antd';
import Header from './Header';
import GNavbar from './GNavbar';
import Skulpt from './Skulpt';
import Question from './Question';

import '../style/style.css';
import 'antd/dist/antd.css';

const IDE = () => {
    return (
        <div>
            {/* header */}
            <Header></Header>
            {/* navbar */}
            <GNavbar></GNavbar>
            {/* IDE/Question */}
            <Row>
                <Col md="3" className="question-col" >
                    <Question />
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
