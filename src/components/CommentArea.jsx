import { Component } from "react";

import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTk0OTY2NDEsImV4cCI6MTcyMDcwNjI0MX0.0Bq5bBUPf3HVB2c3ybiWsbU4ZeiQfFCmvw1Z1Pz-rCQ",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          //console.log(resp.json);
          return resp.json();
        } else {
          throw new Error("Errorer nel reperimento dei dati.");
        }
      })
      .then((comments) => {
        this.setState({ comments });
        console.log(comments);
      })
      .catch((err) => console.log(err))
      .finally(this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.fetchComments();
    console.log("io sono COMPONENTS");
  }

  render() {
    console.log("io sono RENDER");
    return (
      <>
        <AddComment asin={this.props.asin} />
        <CommentsList comments={this.state.comments} isLoading={this.state.isLoading} />
      </>
    );
  }
}
export default CommentArea;
