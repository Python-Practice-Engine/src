import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import '../style/style.css';
import { Typography } from 'antd';
import landingpageImage from '../assets/landingpageImage.jpeg';

const { Title } = Typography;

const LandingPage = () => (
  <div>
    <Container>
      <Row>
        <Col md={6}>
          <Image src={landingpageImage} className="landingPageImg" />
        </Col>
        <Col md={6}>
          <Title
            level={2}
            className="landingPageTitle"
            style={{ color: '#69c0ff' }}
          >
            Welcome to Python Practice Engine!
          </Title>
          <Container>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Python Practice Engine is an interactive
              tool to be used by McMaster students learning how to code in
              Python. How it works is: if you go click on the
              &quot;Practice Engine&quot; tab you
              will be recommended questions that start with more basic topics
              and end with advanced programming topics.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;The way questions are recommended is
              organized by a concept
              graph. The concept graph allows for a user to learn and
              understand the fundamental topics before jumping to more advanced
              ones. Python
              Practice Engine allows you to train your programming muscle
              through programming questions while also providing in-depth
              tutorials on the concepts the question covers. If you do not want
              to be recommended questions you can go straight to the
              &quot;Questions&quot; tab and select specfic questions to do.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Python Practice Engine was created as a
              capstone project
              under the supervision of Dr. Browne and we hope you enjoy it!
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);

export default LandingPage;
