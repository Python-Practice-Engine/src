import React, { useState } from 'react';
import Axios from 'axios';
import {
  Typography,
  Card,
  Input,
} from 'antd';

import {
  MailOutlined,
} from '@ant-design/icons';

import {
  HashRouter,
  Link,
} from 'react-router-dom';

import UserPool from '../UserPool';

const { Title } = Typography;

function SignUpStateHook() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [validCred, setValidCred] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // check two passwords are the same
    if (password !== passwordCheck) {
      console.log("The two passwords don't match");
      setErrorMsg('Passwords do not match');
      setPassword('');
      setPasswordCheck('');
    } else {
      // sign up using cognito api and restrictions of 8 characters and number and special character
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          console.error(err);
          setErrorMsg(err.message);
        }
        console.log(data);
        console.log(data.userSub);
        setValidCred(true);
        setErrorMsg('');
        // insert into user table in the database
        Axios.post('http://localhost:3001/insert_user', {
          user_id: data.userSub,
        }).then(() => {
          console.log('successful insert');
        });
      });
    }
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
          height: '60%',
          width: '40%',
          borderRadius: '10px',
        }
      }
      >
        <Title>
          <div className="login-title">
            Sign Up
          </div>
        </Title>
        <Input
          size="large"
          placeholder=" Email Address"
          prefix={<MailOutlined />}
          type="email"
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
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <Input
          size="large"
          type="password"
          placeholder="Re-enter Password"
          value={passwordCheck}
          onChange={(event) => setPasswordCheck(event.target.value)}
        />

        <button type="submit" onClick={onSubmit}>Submit</button>
        <br />
        <br />
        <HashRouter>
          Already have an account? Click
          <Link to="/Login"> here</Link>
          .
        </HashRouter>
        {validCred && (
          <h4>
            Email has been sent, validate account before
            <Link to="/Login"> logging in</Link>
          </h4>
        )}
        <h4>{errorMsg}</h4>
      </Card>
    </div>
  );
}

export default SignUpStateHook;
