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
class QuestionContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title
          level={3}
        >
          {this.props.question.title}
        </Title>
        <Space>
          <Tag color="warning">{this.props.concept.name}</Tag>
        </Space>
        <p className="questionDescription">
          {this.props.question.description}
        </p>
      </div>

    );
  }
}

export default QuestionContent;
