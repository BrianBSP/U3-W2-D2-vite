import { Alert, ListGroup, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments, isLoading }) =>
  comments.length > 0 && !isLoading ? (
    <ListGroup>
      {comments.map((review) => (
        <SingleComment key={review._id} review={review} />
      ))}
    </ListGroup>
  ) : isLoading ? (
    <Spinner animation="border" variant="primary" />
  ) : (
    <Alert variant="warning">Non ci sono ancora recensioni per questo libro.</Alert>
  );
export default CommentsList;
