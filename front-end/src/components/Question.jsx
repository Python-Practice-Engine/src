import React from 'react';
import {
    Card,
    Tag,
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';


function Question(props) {

    return (
        <Card title={props.title}>
            <Tag color="blue">
                {props.tags}
            </Tag>
            <Tag color="gold">
                {props.difficulty}
            </Tag>
            <p>{props.description}</p> 
        </Card>
    );
}

export default Question;
