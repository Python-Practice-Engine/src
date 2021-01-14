import React from 'react';

// React component library imports
import {
  Menu,
  Typography,
} from 'antd';
import {
  NavLink,
} from 'reactstrap';

// Imports for React routing
import {
  Route,
  Link,
  HashRouter,
  Redirect,
} from 'react-router-dom';

// Personal component imports
import IDE from './IDE';
import LandingPage from './LandingPage';
import Questions from './Questions';

const { Title } = Typography;

/*
  This component is the outline of the site. Basically, this is header, navbar,
  and the footer. This is the component that is imported in the index.js and
  then all other pages are component that are loaded when a tab is clicked.
*/
class Outline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 'home' };
  }

    handleClick = (e) => {
      this.setState({ current: e.key });
    };

    render() {
      const { current } = this.state;
      return (
        <div className="navBar">
          <HashRouter>
            <Title
              style={{
                marginBottom: '0',
                paddingBottom: '0',
                marginTop: '1%',
              }}
            >
              <div className="header">
                Python Practice Engine
              </div>
            </Title>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              style={{
                marginBottom: '2%',
                textAlign: 'center',
                marginTop: '0',
                paddingTop: '0',
              }}
            >
              <Menu.Item key="home">
                <NavLink tag={Link} to="/Home">
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item key="questions">
                <NavLink tag={Link} to="/Questions">
                  Questions
                </NavLink>
              </Menu.Item>
              <Menu.Item key="ide">
                <NavLink tag={Link} to="/IDE/1">
                  Practice Engine
                </NavLink>
              </Menu.Item>
            </Menu>
            {/* This is the map the navbar components to its appropriate
            component. */}
            <div className="content">
              <Route path="/Home" component={LandingPage} />
              <Route path="/IDE/:id" component={IDE} />
              <Route path="/Questions" component={Questions} />
              <Route exact path="/">
                <Redirect to="/Home" />
              </Route>
            </div>
          </HashRouter>
          <div className="footer" />
        </div>
      );
    }
}

export default Outline;
