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
  // const { passed, number } = props;
  if (passed === null) {
    return (
      <Tag
        id={number}
        color="warning"
      >
        Click Submit to Run Test
      </Tag>
    );
  }
  if (passed === 0) {
    return (
      <Tag
        id={number}
        color="error"
      >
        Failed
      </Tag>
    );
  }
  if (passed === 1) {
    return (
      <Tag
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
    this.state = {
      // tagText: 'Click Submit to Run',
      // tagColour: 'warning',
    };
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
                  {/* <Tag
                    id={item.number}
                    color={this.state.tagColour}
                  >
                    {this.state.tagText}
                  </Tag> */}
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
