import React, { useState, useContext } from 'react';
import Axios from 'axios';
import {
  Typography,
  Card,
  Input,
  Button,
} from 'antd';

import { UserOutlined } from '@ant-design/icons';

import {
  HashRouter,
  Link,
  useHistory,
} from 'react-router-dom';

import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
import AccountContext from './Account';

const { Title } = Typography;

function LoginStateHook() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { setUser } = useContext(AccountContext);

  // check that user credentials matches the one stored on aws cognito
  const onSubmit = async (event) => {
    event.preventDefault();

    // retrieving values from aws cognito
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    // retrieving user provided values
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    // compare aws cognito values with user provided values
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log('onSuccess:', data);
        // using sub value which is used as key in table, redirect to main page
        setUser(data.getIdToken().payload.sub);
        Axios.get(`http://localhost:3001/next_question/${data.getIdToken().payload.sub}`).then((
          question,
        ) => {
          history.push(
            `/user/${data.getIdToken().payload.sub}/question/${
              question.data[0].id
            // eslint-disable-next-line comma-dangle
            }`
          );
        });
      },

      onFailure: (err) => {
        console.error('onFailure:', err);
        alert(err.message);
      },

      newPasswordRequired: (data) => {
        console.log('newPasswordRequired:', data);
        alert(data);
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
          height: '50%',
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
          placeholder="Email"
          prefix={<UserOutlined />}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{ marginBottom: '2%' }}
        />
        <Input
          size="large"
          type="password"
          placeholder="Password"
          value={password}
          onChange={
            (event) => setPassword(event.target.value)
          }
          style={{ marginBottom: '3%' }}
        />

        <Button type="primary" size="medium" onClick={onSubmit}>Login</Button>
        <br />
        <br />
        <HashRouter>
          Need an account? Click
          <Link to="/SignUp"> here</Link>
          .
          <br />
          <Link
            to="/ForgotPassword"
            className="forgot-password"
          >
            Forgot password?
          </Link>
        </HashRouter>
      </Card>
    </div>
  );
}

export default LoginStateHook;
