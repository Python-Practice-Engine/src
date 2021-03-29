import React, { useContext } from 'react';

import {
  Route,
} from 'react-router-dom';

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

import AccountContext from './Account';

const { Title } = Typography;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();

    authenticate(this.state.email, this.state.password)
      .then((data) => {
        console.log('Logged in!', data);
      })
      .catch((err) => {
        console.error('Failed to login!', err);
      });
  }

  render() {
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
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />

          <br />
          <br />

          <Input
            size="large"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={
              (event) => this.setState({ password: event.target.value })
            }
          />
          <br />
          <br />

          <button type="submit" onClick={this.onSubmit}>Login</button>
          <HashRouter>
            Need an account? Click
            <Link to="/SignUp"> here</Link>
            .
          </HashRouter>
          <p>authenticate</p>
        </Card>
      </div>
    );
  }
}

export default Login;
