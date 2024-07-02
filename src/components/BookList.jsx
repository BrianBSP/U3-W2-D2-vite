import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import { Col, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  //console.log(props.books);

  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-3">
          <Col md={6} lg={3} xl={2}>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro..."
                value={this.state.searchQuery}
                onChange={(event) => this.setState({ searchQuery: event.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Row className="g-2 mt-3">
              {this.props.books
                .filter((book) => {
                  return book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase());
                })
                .map((book) => {
                  return (
                    <Col xs={12} md={4} key={book.asin}>
                      <SingleBook book={book} />
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <CommentArea />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
