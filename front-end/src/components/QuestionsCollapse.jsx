import React, { useState, useEffect } from 'react';

import Axios from 'axios';

// React component library imports
import {
  Collapse,
  List,
  Avatar,
  Typography,
  Divider,
} from 'antd';
import {
  CodeTwoTone,
  RightSquareOutlined,
} from '@ant-design/icons';

// Imports for React routing
import {
  Link,
  HashRouter,
  NavLink,
} from 'react-router-dom';

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

/*
  This is the complete list of questions. The questions are organized by
  category and all questions are retrieved from the database.
*/
function QuestionsCollapse() {
  const [basics, setBasics] = useState([]);
  const [variables, setVariables] = useState([]);
  const [numbers, setNumbers] = useState([]);
  //   const [functions, setFunctions] = useState([]);

  useEffect(() => {
    let tags = 'PrintStatement';
    Axios.get(`http://localhost:3001/questionSet/${tags}`).then((response) => {
      setBasics(response.data);
    });
    tags = 'Variables';
    Axios.get(`http://localhost:3001/questionSet/${tags}`).then((response) => {
      setVariables(response.data);
    });
    tags = 'Numbers';
    Axios.get(`http://localhost:3001/questionSet/${tags}`).then((response) => {
      setNumbers(response.data);
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
              dataSource={basics}
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
          <Panel
            className="panel-topic"
            header={<Title level={4}>Variables</Title>}
            key="4"
          >
            <List
              itemLayout="horizontal"
              dataSource={variables}
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
                      title={(
                        <NavLink tag={Link} to={`/IDE/${item.Qid}`}>
                          {item.name}
                        </NavLink>
                        )}
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
            header={<Title level={4}>Numbers</Title>}
            key="2"
          >
            <List
              itemLayout="horizontal"
              dataSource={numbers}
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
