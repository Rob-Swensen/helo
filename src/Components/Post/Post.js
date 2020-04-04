import React, { Component } from "react";
import axios from "axios";
import "./Post.css";
import { connect } from "react-redux";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: "",
      author: "",
      authorPicture: "",
      author_id: 0
    };
  }

  componentDidMount() {
    this.getPostInformation(this.props.match.params.postId);
  }

  getPostInformation = id => {
    axios.get(`/api/post/${id}`).then(response => {
      const {
        title,
        img,
        content,
        username,
        profile_pic,
        author_id
      } = response.data[0];
      this.setState({
        title,
        img,
        content,
        author: username,
        authorPicture: profile_pic,
        author_id
      });
    });
  };

  deletePost = () => {
    const { postId } = this.props.match.params;
    axios
      .delete(`/api/post/${postId}`)
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch(err => alert("Not able to delete post"));
  };

  render() {
    const {user_id} = this.props
    const {author_id} = this.state
    if (user_id === author_id) {
      return (
        <section className="post-card">
          <div className="post-header">
            <h1 className="post-title">{this.state.title}</h1>
            <section className="username-pic">
              <p>{this.state.author}</p>
              <div className="pic-background">
                <img className="profile-pic" src={this.state.authorPicture} alt='author profile'/>
              </div>
            </section>
          </div>
          <section className='img-content-section'>
            <div className='placeholder-img'>
              <img className="post-component-img" src={this.state.img} alt='user added'/>
            </div>
            <p className="post-component-content">{this.state.content}</p>
          </section>
          <img
            onClick={this.deletePost}
            className="delete-post-button"
            src="https://cdn0.iconfinder.com/data/icons/shopping-359/512/Bin_bin_delete_trashcan_garbage_dust-512.png"
            alt='trash can icon'
          />
        </section>
      );
    } else {
      return (
        <section className="post-card">
          <div className="post-header">
            <h1 className="post-title">{this.state.title}</h1>
            <section className="username-pic">
              <p>{this.state.author}</p>
              <div className="pic-background">
                <img className="profile-pic" src={this.state.authorPicture} alt='user added' />
              </div>
            </section>
          </div>
          <section className='img-content-section'>
            <div className='placeholder-img'>
              <img className="post-component-img" src={this.state.img} alt='user added'/>
            </div>
            <p className="post-component-content">{this.state.content}</p>
          </section>
        </section>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  const { user_id } = reduxState;
  return {
    user_id
  };
};

export default connect(mapStateToProps)(Post);
