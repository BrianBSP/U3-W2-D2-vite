import { Badge, /* Button, */ ListGroup } from "react-bootstrap";

/* const deleteComment = (review) => {
  const resp = fetch("https://striveschool-api.herokuapp.com/api/comments/" + review._id, {
    method: "DELETE",
    body: JSON.stringify(review),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTk0OTY2NDEsImV4cCI6MTcyMDcwNjI0MX0.0Bq5bBUPf3HVB2c3ybiWsbU4ZeiQfFCmvw1Z1Pz-rCQ",
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    if (resp.ok) {
      return resp.json;
    } else {
      throw new Error("Errore nella DELETE");
    }
  });
}; */

const SingleComment = ({ review }) => (
  <ListGroup.Item title={review.author} className="d-flex justify-content-between align-items-center">
    {review.comment}
    <Badge bg="dark">{review.rate}</Badge>
    {/* <Button
      onClick={() => {
        deleteComment(review._id);
      }}
    >
      🚮
    </Button> */}
  </ListGroup.Item>
);
export default SingleComment;
