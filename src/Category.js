import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  state = {
    categories: [],
  };
  
  componentDidMount(){
    this.getCategories()
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}))
  };
  
  render() {
    return (
      <Container>
        <ListGroup>
          <ListGroupItem color="success">{this.props.info.title}</ListGroupItem>
          {this.state.categories.map((category) => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    )
  }
}
