import React, { Component } from "react";
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Badge,
} from "reactstrap";

export default class CartSummary extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
