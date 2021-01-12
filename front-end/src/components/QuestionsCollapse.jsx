import React from 'react';
import {
  Collapse,
  List,
  Avatar,
  Typography,
  Divider,
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';
import { CodeTwoTone, RightSquareOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const { Title } = Typography;

const data = [
  {
    title: 'Question 1',
  },
  {
    title: 'Question 2',
  },
  {
    title: 'Question 3',
  },
  {
    title: 'Question 4',
  },
];

function QuestionsCollapse() {
  return (
    <div className="collapse-topics">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={
          ({ isActive }) => (
            <RightSquareOutlined
              rotate={isActive ? 90 : 0}
              style={{ 'font-size': '200%' }}
            />
          )
        }
      >
        <Panel
          className="panel-topic"
          header={<Title level={4}>The Basics</Title>}
          key="1"
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    (
                      <Avatar
                        icon={<CodeTwoTone twoToneColor="blue" />}
                        style={{ backgroundColor: 'white' }}
                      />
                    )
                    }
                  title={<a>{item.title}</a>}
                  description={
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean laoreet congue lacus vitae vestibulum. Ut quis diam 
                    in nisl venenatis.`
                  }
                />
              </List.Item>
            )}
          />
        </Panel>
        <Divider />
        <Panel
          className="panel-topic"
          header={<Title level={4}>Data Types</Title>}
          key="2"
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    (
                      <Avatar
                        icon={<CodeTwoTone twoToneColor="blue" />}
                        style={{ backgroundColor: 'white' }}
                      />
                    )
                  }
                  title={<a>{item.title}</a>}
                  description={
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean laoreet congue lacus vitae vestibulum. Ut quis diam 
                    in nisl venenatis.`
                  }
                />
              </List.Item>
            )}
          />
        </Panel>
        <Divider />
        <Panel
          className="panel-topic"
          header={<Title level={4}>Operators</Title>}
          key="3"
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    (
                      <Avatar
                        icon={<CodeTwoTone twoToneColor="blue" />}
                        style={{ backgroundColor: 'white' }}
                      />
                    )
                  }
                  title={<a>{item.title}</a>}
                  description={
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean laoreet congue lacus vitae vestibulum. Ut quis diam 
                    in nisl venenatis.`
                  }
                />
              </List.Item>
            )}
          />
        </Panel>
        <Divider />
        <Panel
          className="panel-topic"
          header={<Title level={4}>Control Structures</Title>}
          key="4"
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    (
                      <Avatar
                        icon={<CodeTwoTone twoToneColor="blue" />}
                        style={{ backgroundColor: 'white' }}
                      />
                    )
                  }
                  title={<a>{item.title}</a>}
                  description={
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean laoreet congue lacus vitae vestibulum. Ut quis diam 
                    in nisl venenatis.`
                  }
                />
              </List.Item>
            )}
          />
        </Panel>
        <Divider />
        <Panel
          className="panel-topic"
          header={<Title level={4}>Functions</Title>}
          key="5"
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    (
                      <Avatar
                        icon={<CodeTwoTone twoToneColor="blue" />}
                        style={{ backgroundColor: 'white' }}
                      />
                    )
                  }
                  title={<a>{item.title}</a>}
                  description={
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean laoreet congue lacus vitae vestibulum. Ut quis diam 
                    in nisl venenatis.`
                  }
                />
              </List.Item>
            )}
          />
        </Panel>
        <Divider />
      </Collapse>
    </div>

  );
}

export default QuestionsCollapse;
