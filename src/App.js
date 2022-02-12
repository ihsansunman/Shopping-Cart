import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state={currentCategory:"", products: []}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  componentDidMount(){
    this.getProducts()
  }

  getProducts = (categoryId) => {
    let url ="http://localhost:3000/products"
    if(categoryId){
      url+="?categoryId="+categoryId
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}))
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
            <ProductList products={this.state.products} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={productInfo} />
          </Col>
        </Row>
      </Container>
    );
  }
}
