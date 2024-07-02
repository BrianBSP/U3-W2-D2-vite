import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      elementId: this.props.asin,
      comment: "",
      rate: "1",
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("perche non va?");
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.newComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTk0OTY2NDEsImV4cCI6MTcyMDcwNjI0MX0.0Bq5bBUPf3HVB2c3ybiWsbU4ZeiQfFCmvw1Z1Pz-rCQ",
        "Content-Type": "application/json",
      },
    });
    if (resp.ok) {
      alert("Commento inviato");
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Aggiungi Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo commento"
            value={this.state.newComment.comment}
            onChange={(e) => this.setState({ newComment: { ...this.state.newComment, comment: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Select
            aria-label="Rate"
            value={this.state.newComment.rate}
            onChange={(e) => this.setState({ newComment: { ...this.state.newComment, rate: e.target.value } })}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-3">
          Invia Commento
        </Button>
      </Form>
    );
  }
}
export default AddComment;
