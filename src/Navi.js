import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import "./App.css"

export default class Navi extends Component {
  render() {
    return (
      <div className="navi">
        <Navbar color="dark" expand="md" dark mb="3">
          <NavbarBrand>
            <Link style={{ color: "white" }} to="">
              Shopping Cart
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/ihsansunman">GitHub</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://asnus.com">Asnus</NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
