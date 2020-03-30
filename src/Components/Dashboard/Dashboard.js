import React, { Component } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: "",
      userPosts: false
    };
  }

  handleInput = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleReset = () => {
    this.setState({
      search: ""
    });
  };

  handleToggle = () => {
    const { userPosts } = this.state;
    this.setState({
      userPosts: !userPosts
    });
  };

  handleGetPosts = () => {
    const { search, userPosts } = this.state;
    const { user_id } = this.props;
    axios.get(`/api/posts/${user_id}/?string=${search}&&userPostStatus=${userPosts}`)
    .then(res => 
      this.setState({
        posts: res.data
      }))
  };

  render() {
    console.log(this.props.user_id);
    let mappedPosts = this.state.posts.map((post, index) => (
      <Post key={index} post={post} />
    ));
    return (
      <div>
        <input
          value={this.state.search}
          placeholder="Search"
          onChange={e => this.handleInput(e)}
        />
        <button>Search</button>
        <button onClick={this.handleReset}>Reset</button>
        <p>My Posts</p>
        <input name="checkbox" type="checkbox" onChange={this.handleToggle} />
        {mappedPosts}
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
