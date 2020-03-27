import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/post/:postid">New Post</Link>
        <Link to="/">Logout</Link>
      </div>
    );
  }
}



export default Nav;
