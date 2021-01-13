import React, { useState, useEffect } from 'react';
import {
    Collapse,
    List,
    Avatar,
    Typography,
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';
import { CodeTwoTone } from '@ant-design/icons';
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
    const [basics, setBasics] = useState([]);
    const [variables, setVariables] = useState([]);
    const [functions, setFunctions] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/questions/1`).then((response)=> {
            console.log(response.data[0]);
            // setPosts
        });
    }, []);

    return (
        <div className="collapse-topics">
            <Collapse
                ghost
                expandIconPosition='right'
            >
                <Panel className="panel-topic" header={<Title level={4}>The Basics</Title>} key="1" >
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (

                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar icon={<CodeTwoTone twoToneColor="blue" />} style={{ backgroundColor: 'white' }} />}
                                    title={<a>{item.title}</a>}
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet congue lacus vitae vestibulum. Ut quis diam in nisl venenatis."
                                />
                            </List.Item>
                        )}
                    />
                </Panel>
                <Panel className="panel-topic" header={<Title level={4}>Data Types</Title>} key="2">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar icon={<CodeTwoTone twoToneColor="blue" />} style={{ backgroundColor: 'white' }} />}
                                    title={<a>{item.title}</a>}
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet congue lacus vitae vestibulum. Ut quis diam in nisl venenatis."
                                />
                            </List.Item>
                        )}
                    />
                </Panel>
                <Panel className="panel-topic" header={<Title level={4}>Operators</Title>} key="3">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar icon={<CodeTwoTone twoToneColor="blue" />} style={{ backgroundColor: 'white' }} />}
                                    title={<a>{item.title}</a>}
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet congue lacus vitae vestibulum. Ut quis diam in nisl venenatis."
                                />
                            </List.Item>
                        )}
                    />
                </Panel>
                <Panel className="panel-topic" header={<Title level={4}>Control Structures</Title>} key="4">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar icon={<CodeTwoTone twoToneColor="blue" />} style={{ backgroundColor: 'white' }} />}
                                    title={<a>{item.title}</a>}
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet congue lacus vitae vestibulum. Ut quis diam in nisl venenatis."
                                />
                            </List.Item>
                        )}
                    />
                </Panel>
                <Panel className="panel-topic" header={<Title level={4}>Functions</Title>} key="5">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar icon={<CodeTwoTone twoToneColor="blue" />} style={{ backgroundColor: 'white' }} />}
                                    title={<a>{item.title}</a>}
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet congue lacus vitae vestibulum. Ut quis diam in nisl venenatis."
                                />
                            </List.Item>
                        )}
                    />
                </Panel>
            </Collapse>
        </div>

    );
}

export default QuestionsCollapse;