import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {
  Card,
} from 'antd';
// import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Skulpt from './Skulpt';
import TestCases from './TestCases';
import QuestionContent from './QuestionContent';
// import TutorialContent from './TutorialContent';

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

  constructor(props) {
    super(props);
    this.state = {
      key: 'question',
      question: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(`http://localhost:3001/questions/${id}`).then((response) => {
      this.setState({ question: response.data[0]});
      console.log(response.data);
    });
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
              <Skulpt />
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default IDE;
