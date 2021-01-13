import React, { useState, useEffect } from 'react';
import {
  Collapse,
  List,
  Avatar,
  Typography,
  Divider,
} from 'antd';
import {
  Link,
  HashRouter,
  NavLink,
} from 'react-router-dom';
import '../style/style.css';
import 'antd/dist/antd.css';
import { CodeTwoTone, RightSquareOutlined } from '@ant-design/icons';
import Axios from 'axios';

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
//   const [basics, setBasics] = useState([]);
//   const [variables, setVariables] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [controlStructures, setControlStructures] = useState([]);

  useEffect(() => {
    let tags = 'functions';
    Axios.get(`http://localhost:3001/questionSet/${tags}`).then((response) => {
      setFunctions(response.data);
    });
    tags = 'controlStructures';
    Axios.get(`http://localhost:3001/questionSet/${tags}`).then((response) => {
      console.log(response.data);
      setControlStructures(response.data);
    });
  }, []);

  return (
    <div className="collapse-topics">
      <HashRouter>
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
            header={<Title level={4}>Basics</Title>}
            key="1"
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (

                <List.Item>
                  <List.Item.Meta
                    avatar={(
                      <Avatar
                        icon={(
                          <CodeTwoTone
                            twoToneColor="blue"
                          />
                      )}
                        style={{ backgroundColor: 'white' }}
                      />
                  )}
                    title={<a>{item.title}</a>}
                    description="Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit. Aenean laoreet congue
                    lacus vitae vestibulum. Ut quis diam in nisl venenatis."
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
                    avatar={(
                      <Avatar
                        icon={<CodeTwoTone twoToneColor="blue" />}
                        style={{ backgroundColor: 'white' }}
                      />
)}
                    title={<a>{item.title}</a>}
                    description="Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit. Aenean laoreet congue
                    lacus vitae vestibulum. Ut quis diam in nisl venenatis."
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
              dataSource={controlStructures}
              renderItem={(item) => (
                <NavLink tag={Link} to={`/IDE/${item.Qid}`}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={(
                        <Avatar
                          icon={<CodeTwoTone twoToneColor="blue" />}
                          style={{ backgroundColor: 'white' }}
                        />
)}
                      title={<a>{item.name}</a>}
                      description={item.description}
                    />
                  </List.Item>
                </NavLink>
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
              dataSource={functions}
              renderItem={(item) => (

                <List.Item>
                  <List.Item.Meta
                    avatar={(
                      <Avatar
                        icon={<CodeTwoTone twoToneColor="blue" />}
                        style={{ backgroundColor: 'white' }}
                      />
        )}
                    title={(
                      <NavLink tag={Link} to={`/IDE/${item.Qid}`}>
                        {item.name}
                      </NavLink>
)}
                    description={item.description}
                  />
                </List.Item>

              )}
            />
          </Panel>
          <Divider />
        </Collapse>
      </HashRouter>
    </div>

  );
}

export default QuestionsCollapse;
