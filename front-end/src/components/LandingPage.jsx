import React from 'react';
import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import '../style/style.css';
import landingpageImage from '../assets/landingpageImage.jpeg'
import { Typography } from 'antd';

const { Title } = Typography;

const LandingPage = () => {
    return (
        <div>
    <Container>
      <Row>
        <Col md={7}>
            <Image src={ landingpageImage } className="landingPageImg"/>
        </Col>
        <Col md={5}>
            <Title 
                level={2} 
                className="landingPageTitle" 
                style={{color: "#69c0ff"}}
            >
                Welcome to Python Practice Engine!
            </Title>
            <Container>
            <p className="landingPageDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Purus gravida quis blandit turpis cursus in hac habitasse platea. 
            Sit amet dictum sit amet justo donec. Molestie a iaculis at erat 
            pellentesque adipiscing. Facilisis mauris sit amet massa vitae 
            tortor condimentum lacinia quis. 
            </p>
            </Container>
        </Col>
      </Row>
    </Container>
        </div>
    );
};


export default LandingPage;
