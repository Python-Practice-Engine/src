import React from 'react';
import {
  Typography,
  Tag,
  Space,
} from 'antd';
import '../style/style.css';

const { Title } = Typography;

function QuestionContent(props) {
  const content = props.contents;
  return (
    <div>
      <Title
        level={3}
      >
        {content.name}
      </Title>
      <Space>
        <Tag color="warning">{content.tags}</Tag>
      </Space>
      <p className="questionDescription">
        {content.description}
      </p>
    </div>
  );
}

export default QuestionContent;
