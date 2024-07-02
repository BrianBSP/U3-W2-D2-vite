import { Badge, ListGroup } from "react-bootstrap";

const SingleComment = ({ review }) => (
  <ListGroup.Item title={review.author} className="d-flex justify-content-between align-items-center">
    {review.comment}
    <Badge bg="dark">{review.rate}</Badge>
  </ListGroup.Item>
);
export default SingleComment;
