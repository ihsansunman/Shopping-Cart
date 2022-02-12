import React, { Component } from "react";
import { Container, Nav, NavItem, NavLink, DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

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
          <Dropdown nav toggle={function noRefCheck() {}}>
            <DropdownToggle caret nav>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
