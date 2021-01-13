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

//   contentList = {
//     question: <QuestionContent
//       contents={this.state.question}
//     />,
//     tutorial: <TutorialContent
//       title="Functions"
//       tags="Functions"
//       description={
//         [
//           `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.`,
//           `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.`,
//         ]
//       }
//     />,
//   };
class IDE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'question',
      question: {},
      Qid: this.props.match.params.id,
    };

    this.handleHardClick = this.handleHardClick.bind(this);
    this.handleEasyClick = this.handleEasyClick.bind(this);
  }

  componentDidMount() {
    Axios.get(`http://localhost:3001/questions/${this.state.Qid}`).then((response) => {
      this.setState({ question: response.data[0] });
    });
    console.log(this.props.match.params);
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
                {/* {this.contentList[tabs.key]} */}
                <QuestionContent
                  contents={this.state.question}
                />
              </Card>
              <TestCases />
            </Col>
            <Col md="6">
              <Skulpt
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
