import React from 'react';
import {Navbar, NavbarBrand, Nav, NavLink, NavItem} from 'reactstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Zach McEntire</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://drive.google.com/file/d/1o6YLTJYDMKCfSPTZ4n80DPPWaRRJbY2i/view">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/zmcentire">Github</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/zachmcentire/">LinkedIn</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar