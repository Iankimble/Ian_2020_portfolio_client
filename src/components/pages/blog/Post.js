import React, { Component } from "react";
import { singlePost } from "../../../API";
import { Container, Jumbotron } from "react-bootstrap";
import reactStringReplace from "react-string-replace";
import moment from "moment";
import style from "../../styles/foundational_style.module.css";
import ReactPlayer from "react-player";

class Post extends Component {
  state = {
    postId: "",
    singlePost: [],
  };

  loadingData = () => {};

  componentDidMount = () => {
    const postId = this.props.match.params.postId;

    singlePost(postId).then((data) => {
      if (data.error) {
      } else {
        this.setState({
          postId: postId,
          singlePost: data,
        });
        console.log(data);
        console.log(data.imgurl);
      }
    });
  };

  render() {
    let text = this.state.singlePost.body;

    if (!this.state.singlePost.video) {
      return (
        <div style={{ textAlign: "center" }}>
          <Container>
            <Jumbotron className={style.pageHeader}>
              <h1>{this.state.singlePost.title}</h1>
              <h4>{this.state.singlePost.subtitle}</h4>
              <i>
                {moment(this.state.singlePost.written_on).format(
                  "MMMM Do YYYY"
                )}
              </i>
            </Jumbotron>
            <img src={this.state.singlePost.imgurl} alt="blog" />
            <p>
              {reactStringReplace(text, /(\^)/g, (match, i) => (
                <p key={i}>{match}</p>
              ))}
            </p>
          </Container>
        </div>
      );
    }
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1>{this.state.singlePost.title}</h1>
            <h4>{this.state.singlePost.subtitle}</h4>
            <i>
              {moment(this.state.singlePost.written_on).format("MMMM Do YYYY")}
            </i>
          </Jumbotron>
          <p>
            {reactStringReplace(text, /(\^)/g, (match, i) => (
              <p key={i}>{match}</p>
            ))}
          </p>
        </Container>
      </div>
    );
  }
}

export default Post;
