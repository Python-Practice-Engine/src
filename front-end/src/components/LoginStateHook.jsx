import React, { useState, useContext } from 'react';
import Axios from 'axios';
import {
  Typography,
  Card,
  Input,
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
  const [errorMsg, setErrorMsg] = useState('');

  const history = useHistory();

  const { setUser } = useContext(AccountContext);

  //check that user credentials matches the one stored on aws cognito 
  const onSubmit = async (event) => {
    event.preventDefault();

    //retrieving values from aws cognito
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    ///retrieving user provided values
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    //compare aws cognito values with user provided values
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log('onSuccess:', data);
        // using sub value which is used as key in table, redirect to main page
        setUser(data.getIdToken().payload.sub);
        setErrorMsg('');
        Axios.get(`http://localhost:3001/next_question/${data.getIdToken().payload.sub}`).then((
          question,
        ) => {
          history.push(`/user/${data.getIdToken().payload.sub}/question/${question.data[0].id}`);
        });
      },

      onFailure: (err) => {
        console.error('onFailure:', err);
        setErrorMsg(err.message);
      },

      newPasswordRequired: (data) => {
        console.log('newPasswordRequired:', data);
        setErrorMsg(data);
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
          <br />
          <br />
          <Link to="/forgot-password"> Forgot your password</Link>
        </HashRouter>
        <h4>{errorMsg}</h4>
      </Card>
    </div>
  );
}

export default LoginStateHook;
