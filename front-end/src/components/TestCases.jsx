import React from 'react';

// React component library imports
import {
  List,
  Typography,
  Tag,
} from 'antd';

// Variable declarations
const { Title } = Typography;
const j = 'Test Case #';

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
        <List
          style={{ width: '100%' }}
          header={<Title level={4}>Test Cases</Title>}
          size="large"
          bordered
          dataSource={this.props.testCases}
          renderItem={
            (item) => (
              <List.Item>
                <b>{j + item.TCid}</b>
                <Tag
                  id={item.TCid}
                  style={{ display: 'none' }}
                  color="success"
                >
                  Passed
                </Tag>
                <br />
                {item.test}
              </List.Item>
            )
          }
        />
      </div>
    );
  }
}

export default TestCases;
