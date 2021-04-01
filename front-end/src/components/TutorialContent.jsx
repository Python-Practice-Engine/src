import React from 'react';

// React component library imports
import {
  Typography,
  Space,
} from 'antd';

const { Title } = Typography;

// populating tutorial tab for main page
function TutorialContent(props) {
  const content = props.contents;
  return (
    <div>
      <Title
        level={3}
      >
        {`${content.name} ${content.level}`}
      </Title>
      <Space />
      <p className="questionDescription">
        {content.tutorial}
      </p>
    </div>
  );
}

export default TutorialContent;
