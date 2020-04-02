import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleCreatePost = () => {
      const { user_id } = this.props;
      const { title, img, content } = this.state;
      axios.post(`/api/post/${user_id}`, {title, img, content})
      .then(response => {
          console.log(response.data)
          this.props.history.push('/dashboard')
      })
      .catch(err => alert('Oops, something went wrong'))
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <h2>Title:</h2>
        <input name='title' value={this.state.title} onChange={e => this.handleChange(e)}></input>
        <img />
        <h2>Image URL:</h2>
        <input name='img' value={this.state.img} onChange={e => this.handleChange(e)}></input>
        <h2>Content:</h2>
        <input name='content' value={this.state.content} onChange={e => this.handleChange(e)}></input>
        <button onClick={this.handleCreatePost}>Post</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
    const { user_id } = reduxState;
    return {
        user_id,
    }
}

export default connect(mapStateToProps)(Form);
