import React, { useContext } from 'react';

import {
  Button,
} from 'antd';
import UserPool from '../UserPool';
import AccountContext from './Account';

function Logout() {
  const { setUser } = useContext(AccountContext);

  // using cognito api to logout and change context to having no user signed in
  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      setUser('');
    }
  };

  return (
    <Button type="primary" size="medium" onClick={logout}>Logout</Button>
  );
}

export default Logout;
