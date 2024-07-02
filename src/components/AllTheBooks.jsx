import fantasy from "../data/fantasy.json";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const AllMyBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((book) => {
          return (
            <Col md={6} lg={3} xl={2} key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Category: {book.category}</Card.Text>
                  <Badge bg="dark">€ {book.price}</Badge>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllMyBooks;
