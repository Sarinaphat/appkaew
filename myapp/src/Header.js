import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Header extends Component{
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }
  render(){
    return(
      <div>
      <Navbar color="faded" light toggleable>
      <NavbarToggler right onClick={this.toggle} />
      <NavbarBrand href="/">vSpace</NavbarBrand>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Profile</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
      </div>
    )
  }
}

export default Header;
