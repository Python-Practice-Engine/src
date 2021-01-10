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
    switch(difficulty) {
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
        {difficulty.toUpperCase()}
      </Tag>
    );
}

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
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
    },
    {
        title: 'Difficulty',
        dataIndex: 'difficulty',
        key: 'difficulty',
        render: difficulty => (CreateDifficultyTag(difficulty)),
    },
  ];
  
  const data = [
    {
        key: '1',
        id: 1,
        title: 'Addition Calculator',
        tags: ['function', 'operator'],
        difficulty: 'easy',
    },
    {
        key: '2',
        id: 2,
        title: 'Concatinating Strings',
        tags: ['string', 'operator'],
        difficulty: 'medium',
    },
    {
        key: '3',
        id: 3,
        title: 'Comparing Lists',
        tags: ['list', 'boolean'],
        difficulty: 'hard',
    },
  ];

function QuestionsTable() {
    return (
        <Table columns={columns} dataSource={data} />
    );
}

export default QuestionsTable;