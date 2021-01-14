import React from 'react';

// React component library imports
import {
  Typography,
  Tag,
  Space,
} from 'antd';

const { Title } = Typography;

/*
  This component renders the content of each question. The content includes:
  the question title, the questions itself, the question's category.
*/
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
        {content.question}
      </p>
    </div>
  );
}

export default QuestionContent;
