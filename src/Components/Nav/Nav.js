import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    return (
      <div>
        <img src={this.props.profile_pic} alt='profile picture'/>
        <div>{this.props.username}</div>
        <Link to="/dashboard">Home</Link>
        <Link to="/post/:postid">New Post</Link>
        <Link to="/">Logout</Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);
