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
      testCases: [],
      tutorial: {},
      redirect: false,
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.axiosCancelSource = Axios.CancelToken.source();
    Axios.get(`http://localhost:3001/questions/${this.props.match.params.Qid}`).then((
      // eslint-disable-next-line comma-dangle
      response
    ) => {
      if (response.data.length === 0) {
        this.setState({ redirect: true });
      }
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
    Axios.get(`http://localhost:3001/testcases/${this.props.match.params.Qid}`).then((
      // eslint-disable-next-line comma-dangle
      response
    ) => {
      if (this.mounted) {
        this.setState({ testCases: response.data });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.Qid !== prevProps.match.params.Qid) {
      Axios.get(`http://localhost:3001/questions/${this.props.match.params.Qid}`).then((
      // eslint-disable-next-line comma-dangle
        response
      ) => {
        if (response.data.length === 0) {
          this.setState({ redirect: true });
        }
        this.setState({ question: response.data[0] });
        Axios.get(
          // eslint-disable-next-line comma-dangle
          `http://localhost:3001/tutorial/${Object.values(this.state.question)[6]}`
        ).then((res) => {
          this.setState({ tutorial: res.data[0] });
        });
      });
      Axios.get(`http://localhost:3001/testcases/${this.props.match.params.Qid}`).then((
      // eslint-disable-next-line comma-dangle
        response
      ) => {
        this.setState({ testCases: response.data });
      });
    }
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel('Axios request canceled.');
    this.mounted = false;
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
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default IDE;
