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
                  title={testCaseTitle + item.TCid}
                  className="test-title"
                  bordered={false}
                >
                  <Tag
                    id={item.TCid}
                    style={{ display: 'none' }}
                    color="success"
                  >
                    Passed
                  </Tag>
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
