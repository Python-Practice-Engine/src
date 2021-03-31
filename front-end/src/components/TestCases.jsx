import React from 'react';

// React component library imports
import {
  List,
  Typography,
  Tag,
  Card,
} from 'antd';

import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

// Variable declarations
const { Title } = Typography;
const testCaseTitle = 'Test Case #';

// Used to render the test-cases table in the IDE page

function TestCase(props) {
  // eslint-disable-next-line prefer-destructuring
  const number = props.item.number;
  const passed = props.item.passed === undefined ? null : props.item.passed;
  // const { passed, number } = props;
  if (passed === null) {
    return (
      <Tag
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
        icon={<ClockCircleOutlined />}
        id={number}
        color="default"
      >
        Click Submit to Run Test
      </Tag>
    );
  }
  if (passed === 0) {
    return (
      <Tag
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
        icon={<ExclamationCircleOutlined />}
        id={number}
        color="warning"
      >
        Failed
      </Tag>
    );
  }
  if (passed === 1) {
    return (
      <Tag
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
        icon={<CheckCircleOutlined />}
        id={number}
        color="success"
      >
        Passed
      </Tag>
    );
  }
}
class TestCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Display the test-cases table on IDE page
  render() {
    return (
      <div className="testCases">
        <Card>
          <Title
            level={3}
          >
            Test Cases
          </Title>
          <List
            style={{
              width: '105%',
              marginLeft: '-12px',
            }}
            size="large"
            bordered
            dataSource={this.props.testCases}
            renderItem={
              (item) => (
                <Card
                  title={testCaseTitle + item.number}
                  className="test-title"
                  bordered={false}
                >
                  <TestCase item={item} />
                  {item.test}
                </Card>
              )
            }
          />
        </Card>
      </div>
    );
  }
}

export default TestCases;
