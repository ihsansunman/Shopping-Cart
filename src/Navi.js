import React, { Component } from "react";
import { Container, Nav, NavItem, NavLink} from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <Container>
        <Nav pills>
          <NavItem>
            <NavLink active href="#">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}
