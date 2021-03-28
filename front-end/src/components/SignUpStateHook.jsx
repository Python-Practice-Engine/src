import React, { useState, useContext } from 'react';

import {
  Typography,
  Card,
  Input,
} from 'antd';

import {
  MailOutlined,
  // UserOutlined,
} from '@ant-design/icons';

import {
  HashRouter,
  Link,
} from 'react-router-dom';

import UserPool from '../UserPool';
import AccountContext from './Account';

const { Title } = Typography;

function SignUpStateHook() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  // const [username, setUsername] = useState('');
  const { user } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordCheck) {
      console.log("The two passwords don't match");
    } else {
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) console.error(err);
        console.log(data);
        // console.log(JSON.stringify(this.state.username));
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

        {/* <Input
          size="large"
          placeholder=" Username"
          prefix={<UserOutlined />}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <br /> */}

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
        <h3>{user}</h3>
      </Card>
    </div>
  );
}

export default SignUpStateHook;
