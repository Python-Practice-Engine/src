import React from 'react';

// React component library imports
import {
  Typography,
  Tag,
  Space,
} from 'antd';

const { Title } = Typography;

function TutorialContent(props) {
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
      {props.description.map((paragraph) => (
        <p className="questionDescription">
          {paragraph}
        </p>
      ))}

    </div>
  );
}

export default TutorialContent;
