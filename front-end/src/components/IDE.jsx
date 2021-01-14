import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {
  Card,
} from 'antd';
import Axios from 'axios';
import Skulpt from './Skulpt';
import TestCases from './TestCases';
import QuestionContent from './QuestionContent';
import TutorialContent from './TutorialContent';

import '../style/style.css';

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
class IDE extends React.Component {
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
    Axios.get(`http://localhost:3001/questions/${this.state.Qid}`).then((response) => {
      this.setState({ question: response.data[0] });
      Axios.get(`http://localhost:3001/tutorial/${Object.values(this.state.question)[6]}`).then((res) => {
        this.setState({ tutorial: res.data[0] });
      });
    });
    Axios.get(`http://localhost:3001/testcases/${this.state.Qid}`).then((response) => {
      this.setState({ testCases: response.data });
    });
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
              <Card
                style={{ width: '100%' }}
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
