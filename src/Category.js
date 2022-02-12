import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
      ],
    };
  }
  render() {
    return (
      <Container>
        <ListGroup>
          <ListGroupItem color="success">{this.props.info.title}</ListGroupItem>
          {
            this.state.categories.map(category => (
              <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
            ))
          }
          
        </ListGroup>
      </Container>
    );
  }
}
