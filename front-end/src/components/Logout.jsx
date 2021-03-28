import React from 'react';

// import {
//   Typography,
//   Card,
//   Input,
// } from 'antd';

// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
// import AccountContext from './Account';

function Logout() {
  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <button type="button" onClick={logout}>Logout</button>
  );
}

export default Logout;
