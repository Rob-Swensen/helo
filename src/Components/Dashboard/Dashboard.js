import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: "",
      userPosts: false
    };
  }

  componentDidMount() {
    this.handleGetPosts();
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
    axios
      .get(
        `/api/posts/${user_id}/?string=${search}&&userPostStatus=${userPosts}`
      )
      .then(response =>
        this.setState({
          posts: response.data
        })
      );
  };

  render() {
    // console.log(this.props);
    let mappedPosts = this.state.posts.map((post, index) => {
      // console.log(post)
      return (
        <div
          className="one-post-box"
          key={index}
          onClick={() => this.props.history.push(`/post/${post.post_id}`)}
        >
          <h1>{post.title}</h1>
          <div className="username-pic">
            <p>{post.username}</p>
            <div className='background-pic'>
              <img
                className="post-profile-pic"
                src={post.profile_pic}
                alt="users profile"
              />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="dashboard">
        <div className="search-container">
          <input
            className="search-box"
            value={this.state.search}
            placeholder="Search by Title"
            onChange={e => this.handleInput(e)}
          />
          <button
            className="button search-button"
            onClick={this.handleGetPosts}
          >
            Search
          </button>
          <button className="button reset-button" onClick={this.handleReset}>
            Reset
          </button>
          <p>My Posts</p>
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            onChange={this.handleToggle}
          />
        </div>
        <section className="search-results">{mappedPosts}</section>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
