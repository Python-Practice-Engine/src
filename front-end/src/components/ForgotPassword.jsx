import React, { useState } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import {
  Typography,
  Card,
} from 'antd';

import {
  HashRouter,
  Link,
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
  const [errorMsg, setErrorMsg] = useState('');

  const history = useHistory();
  // setting parameters for forgot password workflow
  const getUser = new CognitoUser({ Username: email.toLowerCase(), Pool });

  // used to send email to username who has forgotten password
  const sendCode = (event) => {
    event.preventDefault();

    setCode('');
    // send email to account to get verification code necessary to reset password
    getUser.forgotPassword({
      onSuccess: (data) => {
        console.log('onSuccess:', data);
        setErrorMsg('');
      },
      onFailure: (err) => {
        console.error('onFailure:', err);
        setErrorMsg(err.message);
      },
      inputVerificationCode: (data) => { // move to second form after email has been sent with code
        console.log('Input code:', data);
        setErrorMsg('');
        setStage(2);
      },
    });
  };

  // function for second form of resetting the password after getting code
  const resetPassword = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords are not the same');
      setErrorMsg('Passwords are not the same');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    getUser.confirmPassword(code, password, {
      onSuccess: (data) => { // after successful password change, redirect to login page
        console.log('onSuccess:', data);
        setErrorMsg('');
        history.push('/Login');
      },
      onFailure: (err) => {
        console.error('onFailure:', err);
        setErrorMsg(err.message);
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
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email address"
          />
          <button type="submit">Send verification code</button>
          <br />
          <HashRouter>
            Need an account? Click
            <Link to="/SignUp"> here</Link>
            .
            <br />
            <Link to="/Login">Login</Link>
          </HashRouter>
        </form>
        )}

        {stage === 2 && (
          <form onSubmit={resetPassword}>
            <p>Enter verification code, email can take up to 5 minutes</p>
            <input
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="code"
            />
            <br />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password"
              type="password"
            />
            <br />
            <input
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="password"
              type="password"
            />
            <br />
            <button type="submit">Change password</button>
            <br />
            <button type="button" onClick={sendCode}>Resend code</button>
            <br />
            <h4>{errorMsg}</h4>
          </form>
        )}
      </Card>
    </div>
  );
};
