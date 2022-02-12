import React, { Component } from "react";
import { Container,ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  render() {
    return (
      <Container>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}
