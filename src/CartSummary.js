import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>&#160;
            <Badge color="dark">{cartItem.quantity}</Badge>
            &#160;{cartItem.product.productName}
          </DropdownItem>
        ))}
        <DropdownItem divider />
        <DropdownItem><Link to="cart">Go to cart</Link></DropdownItem>
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
            Your Cart -&#160;{this.props.cart.length}
          </DropdownToggle>
          {this.props.cart.length > 0 ?
            this.renderSummary(): this.renderEmptyCart()}
        </UncontrolledDropdown>
      </div>
    );
  }
}
