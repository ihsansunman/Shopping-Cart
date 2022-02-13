import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <Container>
        <h3>{this.props.info.title}</h3>
        <h5>{this.props.currentCategory}</h5>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={()=>{this.props.addToCart(product)}} color="primary" outline>
                    Add Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
