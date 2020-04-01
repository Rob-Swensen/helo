import React, { Component } from "react";
import axios from "axios";
import './Post.css';

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

  componentDidMount(){
    this.getPostInformation(this.props.match.params.postId)
  }

  getPostInformation = (id) => {
    axios.get(`/api/post/${id}`).then(response => {
      console.log(response.data)
      const {title, img, content, username, profile_pic} = response.data[0]
      this.setState({
        title,
        img,
        content,
        author: username,
        authorPicture: profile_pic
      })
    }
    );
  };

  render() {
    console.log(this.state);
    console.log(this.props)
    return (
      <section className='post-card'>
        <div className='post-header'>
          <h1 className='post-title'>{this.state.title}</h1>
          <section className='username-pic'>
            <p>{this.state.author}</p>
            <div className='pic-background'>
              <img className='profile-pic' src={this.state.authorPicture}/>
            </div>
          </section>
        </div>
          <img src={this.state.img}/>
          <p>{this.state.content}</p>
      </section>
    );
  }
}

export default Post;
