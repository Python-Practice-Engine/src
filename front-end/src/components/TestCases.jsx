import React from 'react';
import {
  List,
  Typography,
  Tag,
} from 'antd';

import '../style/style.css';

const { Title } = Typography;

const data = [
  'Test Case #1',
  'Test Case #2',
];

// Used to render the test-cases table in the IDE page
const TestCases = () => (
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
              <Tag style={{ display: 'none' }} color="success">Passed</Tag>
            </span>
          </List.Item>
        )
      }
    />
  </div>
);

export default TestCases;
