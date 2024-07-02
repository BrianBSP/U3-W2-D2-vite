import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card style={{ border: this.state.selected ? "2px solid red" : "2px solid grey" }}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => this.setState({ selected: !this.state.selected })}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>Category: {this.props.book.category}</Card.Text>
          <Badge bg="dark">€ {this.props.book.price}</Badge>
          <Button variant="primary">Buy</Button>

          {this.state.selected && <CommentArea asin={this.props.book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
