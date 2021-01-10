import React, {useEffect} from 'react';
import {
    Card,
    Badge,
    Space,
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';
import Axios from 'axios';

function Question(props) {

    useEffect(() => {
        // const { id } = this.props.match.params
        console.log(props.id)
        // Axios.get(`http://localhost:3001/questions/${props.id}`).then((response)=> {
        Axios.get(`http://localhost:3001/questions/1`).then((response)=> {
            console.log(response.data);
            // props.title=response.data[0].name;
            // props.tags=response.data[0].tags;
            // props.difficulty=response.data[0].difficulty;
            // props.description=response.data[0].description;
        });
    }, [props.id]);

    return (
        <Card title={`${props.id} - ${props.title}`} >
            <Badge color="blue" text={props.tags} />
            <Badge color="gold" text={props.difficulty} />
            <p>{props.description}</p> 
        </Card>
    );
}

export default Question;
