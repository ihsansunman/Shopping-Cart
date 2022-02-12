import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],
    currentCategory: "",
  };

  changeCategory = (category)=> {this.setState({currentCategory: category.categoryName})}

  render() {
    return (
      <Container>
        <ListGroup>
          <ListGroupItem color="success">{this.props.info.title}</ListGroupItem>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={() => this.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h5>{this.state.currentCategory}</h5>
      </Container>
    );
  }
}
