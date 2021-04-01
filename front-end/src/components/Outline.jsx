import React, { useState } from 'react';

// Imports for React routing
import {
  Route,
  HashRouter,
  Redirect,
  Switch,
} from 'react-router-dom';

// Personal component imports
import IDE from './IDE';
import SignUpStateHook from './SignUpStateHook';
import LoginStateHook from './LoginStateHook';
import NoMatch from './NoMatch';
import AccountContext from './Account';
import ForgotPassword from './ForgotPassword';

/*
  This is the outline, it contains the header, navbar, and footer. It is the
  only component imported into the index.js as a result is shared across all
  pages
*/
function Outline() {
  const [user, setUser] = useState('');

  return (
    <div className="navBar">
      <AccountContext.Provider value={{ user, setUser }}>
        <HashRouter>
          <Switch>
            <Route path="/question/:question_id" component={IDE} />
            <Route
              path="/user/:user_id/question/:question_id"
              component={IDE}
            />
            <Route path="/Login" component={LoginStateHook} />
            <Route path="/SignUp" component={SignUpStateHook} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route exact path="/">
              <Redirect to="/Login" />
            </Route>
            <Route exact path="/question">
              <Redirect to="/question/1" />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </HashRouter>
        <div className="footer" />
      </AccountContext.Provider>
    </div>
  );
}

export default Outline;
