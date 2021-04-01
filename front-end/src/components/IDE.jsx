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
import AccountContext from './Account';
import Logout from './Logout';

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
  // eslint-disable-next-line react/static-property-placement
  static contextType = AccountContext;

  mounted = false;

  constructor(props) {
    super(props);
    this.state = {
      key: 'question',
      question: {},
      easierQuestion: -1,
      testCases: [],
      concept: {},
      redirect: false,
      nextQuestion: -1,
    };
  }

  componentDidMount() {
    this.mounted = true;
    const { params } = this.props.match;
    // const userId = this.context.user;
    if (params.user_id && params.question_id) {
      this.context.user = params.user_id;
      Axios.get(`http://localhost:3001/get_user_question/${params.user_id}/${params.question_id}`).then((
        question,
      ) => {
        console.log('lev 1');
        if (question.data.length === 0) {
          this.setState({ redirect: true });
        } else {
          this.setState({ question: question.data[0] });
          Axios.get(`http://localhost:3001/check_current_question/${params.user_id}/${params.question_id}`).then((
            result,
          ) => {
            console.log('lev 2.1');
            const isComplete = result.data[0].completed;
            if (isComplete) {
              Axios.get(`http://localhost:3001/next_question/${params.user_id}`).then((
                nextQuestionData,
              ) => {
                console.log('lev 3.1');
                this.setState({ nextQuestion: nextQuestionData.data[0].id });
              });
            } else {
              this.setState({ nextQuestion: question.data[0].id });
            }
          });
          Axios.get(`http://localhost:3001/check_easier_question/${params.user_id}/${params.question_id}`).then((
            result,
          ) => {
            console.log('lev 2.2');
            const easierAvailable = result.data;
            if (easierAvailable) {
              Axios.get(`http://localhost:3001/get_easier_question/${params.user_id}/${params.question_id}`).then((
                easyQuestionData,
              ) => {
                console.log('lev 3.2');
                this.setState({ easierQuestion: easyQuestionData.data[0].id });
              });
            } else {
              this.setState({ easierQuestion: question.data[0].id });
            }
          });
          Axios.get(`http://localhost:3001/concept/${this.state.question.id}`).then((
            concept,
          ) => {
            console.log('lev 2.3');
            this.setState({ concept: concept.data[0] });
          });
          Axios.get(`http://localhost:3001/user/${params.user_id}/test_cases/${this.state.question.id}`).then((
            testCases,
          ) => {
            console.log('lev 2.4');
            this.setState({ testCases: testCases.data });
          });
        }
      });
    } else if (params.user_id) {
      this.context.user = params.user_id;
      Axios.get(`http://localhost:3001/next_question/${params.user_id}`).then((
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
      Axios.get(`http://localhost:3001/questions/${params.question_id}`).then((
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
    if (params !== prevProps.match.params && this.mounted) {
      if (params.user_id && params.question_id) {
        this.context.user = params.user_id;
        Axios.get(`http://localhost:3001/get_user_question/${params.user_id}/${params.question_id}`).then((
          question,
        ) => {
          console.log('update 1');
          if (question.data.length === 0) {
            this.setState({ redirect: true });
          } else {
            this.setState({ question: question.data[0] });
            Axios.get(`http://localhost:3001/check_current_question/${params.user_id}/${params.question_id}`).then((
              result,
            ) => {
              console.log('update 2.1');
              const isComplete = result.data[0].completed;
              if (isComplete) {
                Axios.get(`http://localhost:3001/next_question/${params.user_id}`).then((
                  nextQuestionData,
                ) => {
                  console.log('update 3.1');
                  this.setState({ nextQuestion: nextQuestionData.data[0].id });
                });
              } else {
                this.setState({ nextQuestion: question.data[0].id });
              }
            });
            Axios.get(`http://localhost:3001/check_easier_question/${params.user_id}/${params.question_id}`).then((
              result,
            ) => {
              console.log('update 2.2');
              const easierAvailable = result.data;
              if (easierAvailable) {
                Axios.get(`http://localhost:3001/get_easier_question/${params.user_id}/${params.question_id}`).then((
                  easyQuestionData,
                ) => {
                  console.log('update 3.2');
                  this.setState({
                    easierQuestion: easyQuestionData.data[0].id,
                  });
                });
              } else {
                this.setState({ easierQuestion: question.data[0].id });
              }
            });
            Axios.get(`http://localhost:3001/concept/${this.state.question.id}`).then((
              concept,
            ) => {
              console.log('update 2.3');
              this.setState({ concept: concept.data[0] });
            });
            Axios.get(`http://localhost:3001/user/${params.user_id}/test_cases/${this.state.question.id}`).then((
              testCases,
            ) => {
              console.log('update 2.4');
              this.setState({ testCases: testCases.data });
            });
          }
        });
      } else if (params.user_id) {
        Axios.get(`http://localhost:3001/next_question/${params.user_id}`).then((
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
        Axios.get(`http://localhost:3001/questions/${params.question_id}`).then((
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

  componentWillUnmount() {
    this.mounted = false;
  }

  updateTestCases = (i, mark) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const testCases = [...this.state.testCases];
    const testCase = { ...testCases[i] };
    testCase.passed = mark;
    testCases[i] = testCase;
    this.setState({ testCases });
    console.log('test cases updated');
  }

  nextQuestion = (nextQuestionData) => {
    this.setState({ nextQuestion: nextQuestionData });
  }

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    const tabs = this.state;
    const { user } = this.context;

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
                  {user === '' ? (
                    <>
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
                    </>
                  ) : (
                    <NavLink tag={Link} to="/Login" className="login-btn">
                      <NavItem>
                        <Logout />
                      </NavItem>
                    </NavLink>
                  )}
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
              questionId={this.state.question.id}
              conceptId={this.state.concept.id}
              easierQuestionId={this.state.easierQuestion}
              updateTestCases={this.updateTestCases}
              nextQuestionId={this.state.nextQuestion}
              nextQuestion={this.nextQuestion}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default IDE;
