import React, { useContext } from 'react';

// import {
//   Typography,
//   Card,
//   Input,
// } from 'antd';

// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
import AccountContext from './Account';

function Logout() {
  const { setUser } = useContext(AccountContext);

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      setUser('');
    }
  };

  return (
    <button type="button" onClick={logout}>Logout</button>
  );
}

export default Logout;
