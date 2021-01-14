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
  constructor(props) {
    super(props);
    this.state = {
      key: 'question',
      question: {},
      id: this.props.match.params.id,
    };

    this.handleHardClick = this.handleHardClick.bind(this);
    this.handleEasyClick = this.handleEasyClick.bind(this);
  }

  componentDidMount() {
    Axios.get(`http://localhost:3001/questions/${this.state.id}`).then(
      (response) => {
        this.setState({ question: response.data[0] });
      // eslint-disable-next-line comma-dangle
      }
    );
  }

  handleHardClick() {
    this.setState({ id: this.props.match.params.id });
    setTimeout(() => window.location.reload(), 300);
  }

  handleEasyClick() {
    this.setState({ id: this.props.match.params.id });
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
                <QuestionContent
                  contents={this.state.question}
                />
              </Card>
              <TestCases />
            </Col>
            <Col md="6">
              {/* This is the text editor itself */}
              <Skulpt
                id={this.state.question.id}
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
