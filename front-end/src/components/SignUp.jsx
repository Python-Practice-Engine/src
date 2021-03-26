import React from 'react';

import {
  Typography,
  Card,
  Input,
} from 'antd';

import {
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {
  HashRouter,
  Link,
} from 'react-router-dom';

const { Title } = Typography;
class SignUp extends React.Component {
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
          />

          <br />
          <br />

          <Input
            size="large"
            placeholder=" Username"
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

          <Input
            size="large"
            type="password"
            placeholder="Re-enter Password"
          />
          <br />
          <br />
          <HashRouter>
            Already have an account? Click
            <Link to="/Login"> here</Link>
            .
          </HashRouter>
        </Card>
      </div>
    );
  }
}

export default SignUp;
