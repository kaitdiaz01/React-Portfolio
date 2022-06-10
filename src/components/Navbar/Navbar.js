import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";



const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return(
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kaitlyn Diaz</NavbarBrand>
        <NavbarToggler/>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#Aboutme">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/kaitdiaz01?tab=repositories">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience">Experience</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )};

export default NavBar;