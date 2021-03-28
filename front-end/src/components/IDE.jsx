import React from 'react';

import Axios from 'axios';

// React component library imports
import {
  Card,
  Typography,
  Button,
} from 'antd';

// Reactstrap nav imports
import {
  Col,
  Row,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

import {
  HashRouter,
  NavLink,
  Link,
  Redirect,
} from 'react-router-dom';

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

const { Title } = Typography;

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
      concept: {},
      redirect: false,
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    if (params.user_id) {
      Axios.get(`http://localhost:3001/question/${this.props.match.params.user_id}`).then((
        question,
      ) => {
        if (question.data.length === 0) {
          this.setState({ redirect: true });
        }
        this.setState({ question: question.data[0] });
        Axios.get(`http://localhost:3001/concept/${this.state.question.id}`).then((
          concept,
        ) => {
          this.setState({ concept: concept.data[0] });
        });
        Axios.get(`http://localhost:3001/test_cases/${this.state.question.id}`).then((
          testCases,
        ) => {
          this.setState({ testCases: testCases.data });
        });
      });
    } else if (params.question_id) {
      Axios.get(`http://localhost:3001/questions/${this.props.match.params.question_id}`).then((
        // eslint-disable-next-line comma-dangle
        question
      ) => {
        if (question.data.length === 0) {
          this.setState({ redirect: true });
        }
        this.setState({ question: question.data[0] });
        Axios.get(`http://localhost:3001/concept/${this.state.question.id}`).then((
          concept,
        ) => {
          this.setState({ concept: concept.data[0] });
        });
        Axios.get(`http://localhost:3001/test_cases/${this.state.question.id}`).then((
          testCases,
        ) => {
          this.setState({ testCases: testCases.data });
        });
      });
    } else {
      this.setState({ redirect: true });
    }
  }

  componentDidUpdate(prevProps) {
    const { params } = this.props.match;
    if (params !== prevProps.match.params) {
      if (params.user_id) {
        Axios.get(`http://localhost:3001/question/${this.props.match.params.user_id}`).then((
          question,
        ) => {
          if (question.data.length === 0) {
            this.setState({ redirect: true });
          }
          this.setState({ question: question.data[0] });
          Axios.get(`http://localhost:3001/concept/${this.state.question.id}`).then((
            concept,
          ) => {
            this.setState({ concept: concept.data[0] });
          });
          Axios.get(`http://localhost:3001/test_cases/${this.state.question.id}`).then((
            testCases,
          ) => {
            this.setState({ testCases: testCases.data });
          });
        });
      } else if (params.question_id) {
        Axios.get(`http://localhost:3001/questions/${this.props.match.params.question_id}`).then((
          // eslint-disable-next-line comma-dangle
          question
        ) => {
          if (question.data.length === 0) {
            this.setState({ redirect: true });
          }
          this.setState({ question: question.data[0] });
          Axios.get(`http://localhost:3001/concept/${this.state.question.id}`).then((
            concept,
          ) => {
            this.setState({ concept: concept.data[0] });
          });
          Axios.get(`http://localhost:3001/test_cases/${this.state.question.id}`).then((
            testCases,
          ) => {
            this.setState({ testCases: testCases.data });
          });
        });
      }
    }
  }

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    const tabs = this.state;

    if (this.state.redirect) {
      return <Redirect to="/NoMatch" />;
    }

    return (
      <div className="main-body">
        <div className="navBar">
          <HashRouter>
            <div className="nav-btns">
              <Navbar color="faded" light expand="md">
                <Nav className="ml-auto" navbar>
                  <NavLink tag={Link} to="/Login" className="login-btn">
                    <NavItem>
                      <Button type="primary" size="medium">Login</Button>
                    </NavItem>
                  </NavLink>
                  <NavLink tag={Link} to="/SignUp">
                    <NavItem>
                      <Button size="medium">Sign Up</Button>
                    </NavItem>
                  </NavLink>
                </Nav>
              </Navbar>
            </div>
          </HashRouter>
          <Title
            style={{
              marginBottom: '2%',
              paddingBottom: '0',
              marginTop: '0',
              paddingTop: '0',
            }}
          >
            <div className="header">
              Python Practice Engine
            </div>
          </Title>
        </div>
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
                  ? (
                    <QuestionContent
                      question={this.state.question}
                      concept={this.state.concept}
                    />
                  )
                  : <TutorialContent contents={this.state.concept} />
              }
            </Card>
            <TestCases testCases={this.state.testCases} />
          </Col>
          <Col md="6">
            {/* This is the text editor itself */}
            <Skulpt
              testCases={this.state.testCases}
              id={this.state.question.id}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default IDE;
