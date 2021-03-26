import React from 'react';

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

const { Title } = Typography;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          />

          <br />
          <br />

          <Input
            size="large"
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <HashRouter>
            Need an account? Click
            <Link to="/SignUp"> here</Link>
            .
          </HashRouter>
        </Card>
      </div>
    );
  }
}

export default Login;
