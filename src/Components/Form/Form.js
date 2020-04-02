import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreatePost = () => {
    const { user_id } = this.props;
    const { title, img, content } = this.state;
    axios
      .post(`/api/post/${user_id}`, { title, img, content })
      .then(response => {
        console.log(response.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => alert("Oops, something went wrong"));
  };

  render() {
    return (
      <div className="main-container">
        <h1>New Post</h1>
        <section className="input-container-form">
          <h2>Title:</h2>
          <input
            className="input"
            type='text'
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          ></input>
          <img className='image-box' src={this.state.img}/>
          <h2>Image URL:</h2>
          <input
            className="input"
            type='text'
            name="img"
            value={this.state.img}
            onChange={e => this.handleChange(e)}
          ></input>
          <h2>Content:</h2>
          <input
            className="input content-box"
            type='text'
            name="content"
            value={this.state.content}
            onChange={e => this.handleChange(e)}
          ></input>
        </section>
        <button className='post-button' onClick={this.handleCreatePost}>Post</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user_id } = reduxState;
  return {
    user_id
  };
};

export default connect(mapStateToProps)(Form);
