import React, {useEffect} from 'react';
import {
    Card,
    Tag,
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';
import Axios from 'axios';

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
