import React, {useState, useEffect} from 'react';
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
import Skulpt from './Skulpt';
import Question from './Question';
import Axios from 'axios';

import '../style/style.css';
import 'antd/dist/antd.css';

const data = [
    'Test Case #1',
    'Test Case #2',
  ];

const IDE = () => {
    const [id, setID] = useState(0);

    useEffect(() => {
        // const { id } = this.props.match.params
        // Axios.get(`http://localhost:3001/questions/${props.id}`).then((response)=> {
        Axios.get(`http://localhost:3001/questions/1`).then((response)=> {
            console.log(response.data);
            // props.title=response.data[0].name;
            // props.tags=response.data[0].tags;
            // props.difficulty=response.data[0].difficulty;
            // props.description=response.data[0].description;
        });
    }, []);


    return (
        <div>
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
