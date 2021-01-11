import React from 'react';
import {
    Card,
    Badge,
    Space,
    Tag,
    Table,
    Collapse
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function QuestionsCollapse() {
    return (
        <Collapse className="collapse" defaultActiveKey={['1']} ghost>
            <Panel className="panel" header="This is panel header 1" key="1">
            <p>{text}</p>
            </Panel>
            <Panel className="panel" header="This is panel header 2" key="2">
            <p>{text}</p>
            </Panel>
            <Panel className="panel" header="This is panel header 3" key="3">
            <p>{text}</p>
            </Panel>
        </Collapse>
    );
}

export default QuestionsCollapse;