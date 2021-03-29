import React from 'react';

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

const { Title } = Typography;
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordCheck: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.passwordCheck) {
      console.log('The two passwords do not match');
    } else {
      UserPool.signUp(this.state.email, this.state.password, [], null,
        (err, data) => {
          if (err) console.error(err);
          console.log(data);
        });
    }
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
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />

          <br />
          <br />

          {/* <Input
            size="large"
            placeholder=" Username"
            prefix={<UserOutlined />}
          />

          <br />
          <br /> */}

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

          <Input
            size="large"
            type="password"
            placeholder="Re-enter Password"
            value={this.state.passwordCheck}
            onChange={
              (event) => this.setState({ passwordCheck: event.target.value })
            }
          />
          <br />
          <br />
          <button type="submit" onClick={this.onSubmit}>Sign Up</button>
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
