import React from 'react';

// React component library imports
import {
  List,
  Typography,
  Tag,
} from 'antd';

// Variable declarations
const { Title } = Typography;
let i;
const j = 'Test Case #';
const data = [];

// Used to render the test-cases table in the IDE page
class TestCases extends React.Component {
  constructor(props) {
    super(props);

    // Populate variable with retrieved test-cases
    const tests = this.props.testCases;
    for (i = 0; i < tests.length; i += 1) {
      data.push(j + tests[i].TCid);
    }
  }

  // Display the test-cases table on IDE page
  render() {
    return (
      <div className="testCases">
        <List
          style={{ width: '100%' }}
          header={<Title level={4}>Test Cases</Title>}
          size="large"
          bordered
          dataSource={data}
          renderItem={
            (item) => (
              <List.Item>
                {item}
                <span className="float-right">
                  <Tag id={item} style={{ display: 'none' }} color="success">Passed</Tag>
                </span>
              </List.Item>
            )
          }
        />
      </div>
    );
  }
}

export default TestCases;
