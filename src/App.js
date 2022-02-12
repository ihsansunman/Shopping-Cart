import { Container, Row, Col } from "reactstrap";
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let productInfo = { title: "Product List" };
  let categoryInfo = { title: "Category List" };
  return (
    <Container>
      <Row>
        <Navi />
      </Row>
      <Row>
        <Col xs="3">
          <Category info={categoryInfo} />
        </Col>
        <Col xs="9">
          <ProductList info={productInfo} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
