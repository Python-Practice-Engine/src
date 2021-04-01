import React from 'react';

// React component library imports
import {
  List,
  Typography,
  Tag,
  Card,
} from 'antd';

// Variable declarations
const { Title } = Typography;
const testCaseTitle = 'Test Case #';

// Used to render the test-cases table in the IDE page

function TestCase(props) {
  // eslint-disable-next-line prefer-destructuring
  const number = props.item.number;
  const passed = props.item.passed === undefined ? null : props.item.passed;
  if (passed === null) {
    return (
      <div>
        <Tag
          style={{
            display: 'inline-flex',
            alignItems: 'center',
          }}
          id={number}
          color="#1890ff"
        >
          Click submit to run tests
        </Tag>
      </div>
    );
  }
  if (passed === 0) {
    return (
      <div>
        <Tag
          style={{
            display: 'inline-flex',
            alignItems: 'center',
          }}
          id={number}
          color="red"
        >
          Failed
        </Tag>
      </div>
    );
  }
  if (passed === 1) {
    return (
      <div>
        <Tag
          style={{
            display: 'inline-flex',
            alignItems: 'center',
          }}
          id={number}
          color="green"
        >
          Passed
        </Tag>
      </div>
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
