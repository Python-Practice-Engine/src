import React from 'react';
import {
    Card,
    Badge,
    Space,
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';


function Question(props) {

    return (
        <Card title={`${props.id} - ${props.title}`} >
            <Badge color="blue" text={props.tags} />
            <Badge color="gold" text={props.difficulty} />
            <p>{props.description}</p> 
        </Card>
    );
}

export default Question;
