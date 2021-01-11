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
                {props.title}
            </Title>
            <Space>
                <Tag color="warning">{props.tags}</Tag>
            </Space>
            <p className="questionDescription">
                {props.description}
            </p> 
        </div>
    );
}

export default QuestionContent;
