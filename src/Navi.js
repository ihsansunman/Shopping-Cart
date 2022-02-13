import React, { Component } from "react";
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavbarText,
  Badge,
} from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" full light>
          <NavbarBrand href="/">Shopping Cart</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavbarText>Simple Text</NavbarText>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Cart -
                  <Badge color="success" pill>
                    {this.props.cart.length}
                  </Badge>
                </DropdownToggle>
                <DropdownMenu right>
                  {this.props.cart.map((cart) => (
                    <DropdownItem>Product Name</DropdownItem>
                  ))}
                  <DropdownItem divider />
                  <DropdownItem>Clear Cart</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
