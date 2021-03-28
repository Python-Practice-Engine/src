import React, { useState, useContext } from 'react';

import {
  Typography,
  Card,
  Input,
} from 'antd';

import { UserOutlined } from '@ant-design/icons';

import {
  HashRouter,
  Link,
} from 'react-router-dom';

import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
import AccountContext from './Account';

const { Title } = Typography;

function LoginStateHook() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AccountContext);

  const onSubmit = async (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log('onSuccess:', data);
        console.log(data.getIdToken().payload.email);
        setUser(data.getIdToken().payload.email);
      },

      onFailure: (err) => {
        console.error('onFailure:', err);
      },

      newPasswordRequired: (data) => {
        console.log('newPasswordRequired:', data);
      },
    });
  };

  return (
    <div className="login-page">
      <Card style={
        {
          textAlign: 'center',
          position: 'absolute',
          margin: 'auto',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          height: '40%',
          width: '30%',
          borderRadius: '10px',
        }
      }
      >
        <Title>
          <div className="login-title">
            Login
          </div>
        </Title>
        <Input
          size="large"
          placeholder="Username"
          prefix={<UserOutlined />}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />
        <br />

        <Input
          size="large"
          type="password"
          placeholder="Password"
          value={password}
          onChange={
            (event) => setPassword(event.target.value)
          }
        />
        <br />
        <br />

        <button type="submit" onClick={onSubmit}>Login</button>
        <HashRouter>
          Need an account? Click
          <Link to="/SignUp"> here</Link>
          .
        </HashRouter>
      </Card>
    </div>
  );
}

export default LoginStateHook;
