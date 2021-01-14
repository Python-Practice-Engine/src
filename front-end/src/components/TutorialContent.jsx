import React from 'react';
import {
  Typography,
  Space,
} from 'antd';
import '../style/style.css';

const { Title } = Typography;

function TutorialContent(props) {
  const content = props.contents;
  return (
    <div>
      <Title
        level={3}
      >
        {content.name}
      </Title>
      <Space />
      <p className="questionDescription">
        {content.description}
      </p>
    </div>
  );
}

export default TutorialContent;
