import React from 'react';

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

/*
  The IDE component is the component that contains: the text editor, test
  cases, the question itself, and the tutorial for the question. This component
  essentially houses a few other components and is the "practice engine" page.
*/

class IDE extends React.Component {
  mounted = false;

  constructor(props) {
    super(props);
    this.state = {
      key: 'question',
      question: {},
      testCases: [],
      tutorial: {},
      Qid: this.props.match.params.Qid,
    };

    this.handleHardClick = this.handleHardClick.bind(this);
    this.handleEasyClick = this.handleEasyClick.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.axiosCancelSource = Axios.CancelToken.source();
    Axios.get(`http://localhost:3001/questions/${this.state.Qid}`).then((
      // eslint-disable-next-line comma-dangle
      response
    ) => {
      if (this.mounted) {
        this.setState({ question: response.data[0] });
        Axios.get(
          // eslint-disable-next-line comma-dangle
          `http://localhost:3001/tutorial/${Object.values(this.state.question)[6]}`
        ).then((res) => {
          this.setState({ tutorial: res.data[0] });
        });
      }
    });
    Axios.get(`http://localhost:3001/testcases/${this.state.Qid}`).then((
      // eslint-disable-next-line comma-dangle
      response
    ) => {
      if (this.mounted) {
        this.setState({ testCases: response.data });
      }
    });
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel('Axios request canceled.');
    this.mounted = false;
  }

  handleHardClick() {
    this.setState({ Qid: this.props.match.params.Qid });
    setTimeout(() => window.location.reload(), 300);
  }

  handleEasyClick() {
    this.setState({ Qid: this.props.match.params.Qid });
    setTimeout(() => window.location.reload(), 300);
  }

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    const tabs = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col md="6">
              {/* The card that contains the question and tutorial */}
              <Card
                className="questionCard"
                tabList={tabList}
                activeTabKey={tabs.key}
                onTabChange={(key) => {
                  this.onTabChange(key, 'key');
                }}
              >
                {
                  tabs.key === 'question'
                    ? <QuestionContent contents={this.state.question} />
                    : <TutorialContent contents={this.state.tutorial} />
                }
              </Card>
              <TestCases testCases={this.state.testCases} />
            </Col>
            <Col md="6">
              {/* This is the text editor itself */}
              <Skulpt
                testCases={this.state.testCases}
                id={this.state.question.Qid}
                handleHardClick={this.handleHardClick}
                handleEasyClick={this.handleEasyClick}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default IDE;
