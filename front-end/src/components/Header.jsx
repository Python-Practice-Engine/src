import React from 'react';
import {
  Card,
  Button,
  Row,
  Col,
} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import '../style/style.css'
import logo from '../assets/logo.jpeg'

class Header extends React.Component {
    render() {
      return (
        <Row className="header-padding">
            <Col  md="6">
                <Card className="logo-card">
                    <Image src={ logo } className="header-logo"/>
                </Card>
            </Col>
            <Col md="6">
                <div className="float-right">
                    <Button color="outline-success" size="md" className="log-out-btn">Log Out</Button>{' '}
                </div>
            </Col>
        </Row>
      );
    }
  }

export default Header;
