import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state={currentCategory:""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={productInfo} />
          </Col>
        </Row>
      </Container>
    );
  }
}
