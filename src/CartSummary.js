import React, { Component } from "react";
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Badge,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <DropdownMenu right>
        {this.props.cart.map((cartItem) => (
          <DropdownItem key={cartItem.product.id}>
            <Badge color="dark">{cartItem.quantity}</Badge>
            {cartItem.product.productName}
          </DropdownItem>
        ))}
        <DropdownItem divider />
        <DropdownItem>Clear Cart</DropdownItem>
      </DropdownMenu>
    );
  }
  renderEmptyCart(){
      return(
        <DropdownMenu>
              <DropdownItem>Cart is Empty</DropdownItem>
            </DropdownMenu>
      )
  }
  render() {
    return (
      <div>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Your Cart - {this.props.cart.length}
          </DropdownToggle>
          {this.props.cart.length > 0 ?
            this.renderSummary(): this.renderEmptyCart()}
        </UncontrolledDropdown>
      </div>
    );
  }
}
