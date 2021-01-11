import React from 'react';
import {
    Typography,
    Tag,
    Space
} from 'antd';
import '../style/style.css';

const { Title } = Typography;

function QuestionContent(props) {
    
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
