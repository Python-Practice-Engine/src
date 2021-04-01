import React, { useState } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import {
  Typography,
  Card,
  Button,
  Input,
} from 'antd';

import {
  useHistory,
} from 'react-router-dom';

import Pool from '../UserPool';

const { Title } = Typography;

export default () => {
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const getUser = new CognitoUser({ Username: email.toLowerCase(), Pool });

  const sendCode = (event) => {
    event.preventDefault();

    setCode('');
    getUser.forgotPassword({
      onSuccess: (data) => {
        console.log('onSuccess:', data);
      },
      onFailure: (err) => {
        console.error('onFailure:', err);
        alert(err.message);
      },
      inputVerificationCode: (data) => {
        console.log('Input code:', data);
        setStage(2);
      },
    });
  };

  const resetPassword = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords are not the same');
      alert('Passwords are not the same');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    getUser.confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log('onSuccess:', data);
        history.push('/Login');
      },
      onFailure: (err) => {
        console.error('onFailure:', err);
        alert(err.message);
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
          height: '60%',
          width: '40%',
          borderRadius: '10px',
        }
      }
      >
        <Title>
          <div className="login-title">
            Forgot Password
          </div>
        </Title>
        {stage === 1 && (
        <form onSubmit={sendCode}>
          <p>Enter your email address below</p>
          <Input
            value={email}
            size="large"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            style={{ marginBottom: '2%' }}
          />
          <br />
          <Button type="primary" size="medium">Send verification code</Button>
          <br />
        </form>
        )}

        {stage === 2 && (
          <form onSubmit={resetPassword}>
            <p>Enter verification code, email can take up to 5 minutes</p>
            <Input
              value={code}
              size="large"
              onChange={(event) => setCode(event.target.value)}
              placeholder="code"
              style={{ marginBottom: '2%' }}
            />
            <br />
            <Input
              value={password}
              size="large"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password"
              type="password"
              style={{ marginBottom: '2%' }}
            />
            <br />
            <Input
              value={confirmPassword}
              size="large"
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="password"
              type="password"
              style={{ marginBottom: '3%' }}
            />
            <br />
            <Button size="medium" style={{ marginRight: '2%' }}>
              Change password
            </Button>
            <Button type="primary" size="medium" onClick={sendCode}>
              Resend code
            </Button>
            <br />
          </form>
        )}
      </Card>
    </div>
  );
};
