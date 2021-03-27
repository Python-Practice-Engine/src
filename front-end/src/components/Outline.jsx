import React from 'react';

// Imports for React routing
import {
  Route,
  HashRouter,
  Redirect,
  Switch,
} from 'react-router-dom';

// Personal component imports
import IDE from './IDE';
import SignUp from './SignUp';
import Login from './Login';
import NoMatch from './NoMatch';

/*
  This is the outline, it contains the header, navbar, and footer. It is the
  only component imported into the index.js as a result is shared across all
  pages
*/
const Outline = () => (
  <div className="navBar">
    <HashRouter>
      <Switch>
        <Route path="/IDE/:Qid" component={IDE} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route exact path="/">
          <Redirect to="/IDE/1" />
        </Route>
        <Route exact path="/IDE">
          <Redirect to="/IDE/1" />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </HashRouter>
    <div className="footer" />
  </div>
);

export default Outline;
