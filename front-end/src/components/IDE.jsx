import React from 'react';
import {
  CardTitle,
  CardText,
  CardBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import {
    Row,
    Col,
    Card,
    Badge,
    List,
} from 'antd';
import Header from './Header';
import GNavbar from './GNavbar';
import Skulpt from './Skulpt';
import Question from './Question';

import '../style/style.css';
import 'antd/dist/antd.css';

const data = [
    'Test Case #1',
    'Test Case #2',
  ];

const IDE = () => {
    return (
        <div>
            {/* header */}
            <Header></Header>
            {/* navbar */}
            <GNavbar></GNavbar>
            {/* IDE/Question */}
            <Row gutter={32} style={{margin: "1% 5% 0 5%" }}>
                <Col span={6} className="gutter-row">
                    <div className="question-col">
                        <Question 
                            title="Addition Calculator" 
                            tags="Functions" difficulty="Easy" 
                            description="Write a function which takes two parameters, adds them together, and returns the result"
                        />
                    </div>
                </Col>
                <Col span={18} className="gutter-row">
                        <Row gutter={16} >
                            <Skulpt ></Skulpt>    
                        </Row>
                        <Row gutter={16}>
                            <List
                                style={{width:'100%', "margin-top": "1%"}}
                                header={<h4>Test Cases</h4>}
                                size="large"
                                bordered
                                dataSource={data}
                                renderItem={item => <List.Item>
                                                        {item}
                                                        <span className="float-right"><Badge status="success" text="Passed" /></span>
                                                    </List.Item>}
                            />
                        </Row>         
                </Col>
            </Row>
        </div>
    );
};


export default IDE;
