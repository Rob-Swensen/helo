import React, { Component } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";
import axios from 'axios';
import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: "",
      userPosts: false
    };
  }

  componentDidMount(){
    this.handleGetPosts()
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
    .then(response => 
      // console.log(response.data)
      this.setState({
        posts: response.data
      })
    )
  };

  render() {
    console.log(this.state.posts);
    let mappedPosts = this.state.posts.map((post, index) => (
      <Post key={index} post={post} />
    ));
    return (
      <div className='dashboard'>
        <input className='search-box'
          value={this.state.search}
          placeholder="Search"
          onChange={e => this.handleInput(e)}
        />
        <button className='button search-button' onClick={this.handleGetPosts}>Search</button>
        <button className='button reset-button' onClick={this.handleReset}>Reset</button>
        <p>My Posts</p>
        <input className='checkbox' name="checkbox" type="checkbox" onChange={this.handleToggle} />
        {mappedPosts}
      </div>
    );
    }
  }

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
