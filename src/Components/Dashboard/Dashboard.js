import React, { Component } from "react";
import Post from "../Post/Post";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ["test", "test2"],
      search: "",
      userPosts: true
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
    })
  };

  render() {
    let mappedPosts = this.state.posts.map((post, index) => (
      <Post key={index} post={post} />
    ));
    return (
      <div>
        <input value={this.state.search} placeholder="Search" onChange={e => this.handleInput(e)} />
        <button>Search</button>
        <button onClick={this.handleReset}>Reset</button>
        <p>My Posts</p>
        <input name="checkbox" type="checkbox" />
        {mappedPosts}
      </div>
    );
  }
}

export default Dashboard;
