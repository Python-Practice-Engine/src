import React, {useEffect} from 'react';
import {
    Typography,
    Tag,
    Space
} from 'antd';
import '../style/style.css';

const { Title } = Typography;

function QuestionContent(props) {
    

    useEffect(() => {
        // const { id } = this.props.match.params
        // Axios.get(`http://localhost:3001/questions/${id}`).then((response)=> {
        // Axios.get(`http://localhost:3001/questions/1`).then((response)=> {
        //     console.log(response.data[0]);
        //     // setPosts
        // });
        console.log("Props have changed");
        
    }, []);

    console.log(props.question);
    return (
        <div>
            <Title 
                level={3} 
            >
                {props.question.name}
            </Title>
            <Space>
                <Tag color="warning">{props.question.tags}</Tag>
            </Space>
            <p className="questionDescription">
                {props.question.description}
            </p> 
        </div>
    );
}

export default QuestionContent;
