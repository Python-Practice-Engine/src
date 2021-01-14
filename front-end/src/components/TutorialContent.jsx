import React from 'react';

// React component library imports
import {
  Typography,
  Space,
} from 'antd';

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
