import React , { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import '../style/style.css'

const GNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="navbar-padding">
            <Navbar color="dark" dark expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem >
                        <NavLink href="/">Questions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Resources</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Practice Engine</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default GNavbar;