import React from 'react';
import {
    Card,
    Badge,
    Space,
    Tag,
    Table
} from 'antd';
import '../style/style.css';
import 'antd/dist/antd.css';

function CreateCategoryTag(category) {
    let color;
    switch(category) {
        case 'function':
            color = 'red';
            break;
        case 'operator':
            color = 'blue';
            break;
        case 'string':
            color = 'orange';
            break;
        case 'list':
            color = 'gold';
            break;
        case 'boolean':
            color = 'lime';
            break;
    }
    return (
      <Tag color={color} key={category}>
        {category.toUpperCase()}
      </Tag>
    );
}

function CreateDifficultyTag(difficulty) {
    let color;
    switch(difficulty.text) {
        case 'easy':
            color = 'green';
            break;
        case 'medium':
            color = 'gold';
            break;
        case 'hard':
            color = 'volcano';
            break;
    }
    return (
      <Tag color={color}>
        {difficulty.text.toUpperCase()}
      </Tag>
    );
}

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a,b) => a.id - b.id,
        sortDirections: ['descend', 'ascend']
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (tags.map(tag => (CreateCategoryTag(tag)))),
        filters: [
            {
                text: 'Function',
                value: 'function',
            },
            {
                text: 'Operator',
                value: 'operator',
            },
            {
                text: 'String',
                value: 'string',
            },
            {
                text: 'List',
                value: 'list',
            },
            {
                text: 'Boolean',
                value: 'boolean',
            },
        ],
        onFilter: (value, record) => record.tags.includes(value),
    },
    {
        title: 'Difficulty',
        dataIndex: 'difficulty',
        key: 'difficulty',
        render: difficulty => (CreateDifficultyTag(difficulty)),
        sorter: (a,b) => a.difficulty.value - b.difficulty.value,
        sortDirections: ['descend', 'ascend'],
        filters: [
            {
                text: 'Easy',
                value: 'easy',
            },
            {
                text: 'Medium',
                value: 'medium',
            },
            {
                text: 'Hard',
                value: 'hard',
            },
        ],
        onFilter: (value, record) => record.difficulty.text === value,
    },
  ];
  
  const data = [
    {
        key: '1',
        id: 1,
        title: 'Addition Calculator',
        tags: ['function', 'operator'],
        difficulty: {text: 'easy', value: 1},
    },
    {
        key: '2',
        id: 2,
        title: 'Concatinating Strings',
        tags: ['string', 'operator'],
        difficulty: {text: 'medium', value: 2}
    },
    {
        key: '3',
        id: 3,
        title: 'Comparing Lists',
        tags: ['list', 'boolean'],
        difficulty: {text: 'hard', value: 3}
    },
  ];

function QuestionsTable() {
    return (
        <Table columns={columns} dataSource={data} bordered/>
    );
}

export default QuestionsTable;