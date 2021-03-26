import React, { useState, useEffect } from 'react';

import Axios from 'axios';

// React component library imports
import {
  Card,
} from 'antd';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

// Personal component imports
import QuestionContent from './QuestionContent';
import Skulpt from './Skulpt';
import TestCases from './TestCases';
import TutorialContent from './TutorialContent';

// tabList lists the names of the within the questions card.

/*
  The IDE component is the component that contains: the text editor, test
  cases, the question itself, and the tutorial for the question. This component
  essentially houses a few other components and is the "practice engine" page.
*/

function IDE(props) {
  const [question, setQuestion] = useState({});
  // const [Qid, setQid] = useState(props.match.params.Qid);
  const [k, setK] = useState('question');
  const [tutorial, setTutorial] = useState({});
  const [testCases, setTestCases] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/questions/${props.match.params.Qid}`).then((
      // eslint-disable-next-line comma-dangle
      response
    ) => {
      setQuestion(response.data[0]);
      Axios.get(
        // eslint-disable-next-line comma-dangle
        `http://localhost:3001/tutorial/${Object.values(question)[6]}`
      ).then((res) => {
        setTutorial(res.data[0]);
      });
    });
    Axios.get(`http://localhost:3001/testcases/${props.match.params.Qid}`).then((
      // eslint-disable-next-line comma-dangle
      response
    ) => {
      setTestCases(response.data);
    });
  }, []);

  // const contentList = {
  //   question: <QuestionContent contents={question} />,
  //   tutorial: <TutorialContent contents={tutorial} />,
  // };

  const tabList = [
    {
      key: 'question',
      tab: 'Question',
    },
    {
      key: 'tutorial',
      tab: 'Tutorial',
    },
  ];

  const onTabChange = (key, type) => {
    console.log(key);
    console.log(type);
    console.log(key, type);
    setK('tutorial');
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            {/* The card that contains the question and tutorial */}
            <Card
              className="questionCard"
              tabList={tabList}
              activeTabKey={k}
              onTabChange={(key) => {
                onTabChange(key, 'key');
              }}
            >
              {
                k === 'question'
                  ? <QuestionContent contents={question} />
                  : <TutorialContent contents={tutorial} />
              }
            </Card>
            <TestCases testCases={testCases} />
          </Col>
          <Col md="6">
            {/* This is the text editor itself */}
            <Skulpt
              testCases={testCases}
              id={question.id}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IDE;
