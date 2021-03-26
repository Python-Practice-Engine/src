import React from 'react';

// React component library imports
import {
  Typography,
} from 'antd';

// Imports for React routing
import {
  Route,
  HashRouter,
  Redirect,
  Switch,
} from 'react-router-dom';

// Personal component imports
import IDE from './IDE';

const { Title } = Typography;

/*
  This is the outline, it contains the header, navbar, and footer. It is the
  only component imported into the index.js as a result is shared across all
  pages
*/
const Outline = () => (
  <div className="navBar">
    <HashRouter>
      <Title
        style={{
          marginBottom: '2%',
          paddingBottom: '0',
        }}
      >
        <div className="header">
          Python Practice Engine
        </div>
      </Title>
      <Switch>
        <Route exact path="/IDE/:Qid" component={IDE} />
        <Route exact path="/">
          <Redirect to="/IDE/1" />
        </Route>
        <Route exact path="/IDE">
          <Redirect to="/IDE/1" />
        </Route>
      </Switch>
    </HashRouter>
    <div className="footer" />
  </div>
);
export default Outline;
