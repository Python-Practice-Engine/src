import React, { useState } from 'react';

// React component library imports
import {
  Typography,
  Button,
} from 'antd';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

// Imports for React routing
import {
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';

// Personal component imports
import IDE from './IDE';

const { Title } = Typography;

/*
  This is the outline, it contains the header, navbar, and footer. It is the
  only component imported into the index.js as a result is shared across all
  pages
*/
const Outline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navBar">
      <div className="nav-btns">
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="login-btn">
                <Button type="primary" size="medium">Login</Button>
              </NavItem>
              <NavItem>
                <Button size="medium">Sign up</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
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
      <HashRouter>
        <div className="content">
          <Route path="/IDE/:Qid" component={IDE} />
          <Route exact path="/">
            <Redirect to="/IDE/1" />
          </Route>
          <Route exact path="/IDE">
            <Redirect to="/IDE/1" />
          </Route>
        </div>
      </HashRouter>
      <div className="footer" />
    </div>
  );
};

export default Outline;
