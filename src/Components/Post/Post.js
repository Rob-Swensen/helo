import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: "",
      author: "",
      authorPicture: ""
    };
  }

  render() {
    console.log(this.props)
    const {title, username, profile_pic} = this.props.post
    return <div>{title} {username} <img src={profile_pic} alt='user profile'/></div>;
  }
}

export default Post;
