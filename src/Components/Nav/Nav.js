import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import homeIcon from "./helo_home_logo.png";
import newIcon from "./helo_new_icon.png";
import logoutIcon from "./logout_icon.png";
import axios from 'axios';
import {getUser} from '../../redux/reducer';

class Nav extends Component {

  componentDidMount(){
    this.findUser()
  }

handleLogout = () => {
    axios.post('/api/auth/logout').then(() => {
      this.props.logoutUser();
      this.props.history.push('/');
    })
    .catch(err => console.log)
  }

  findUser = () => {
    axios.get('/api/auth/me')
    .then(response => {
      this.props.getUser(response.data[0])
    })
  }
  
  render() {
    return (
      <div className="nav-bar">
        <div className='profile-pic-background'>
          <img
            className="profile-pic"
            src={this.props.profile_pic}
            alt="user"
          />
        </div>
        <div className="display-username">{this.props.username}</div>
        <Link to="/dashboard">
          <img className="nav-icon" src={homeIcon} alt="home icon" />
        </Link>
        <Link className="nav-icon" to="/new">
          <img className="nav-icon" src={newIcon} alt="new post icon" />
        </Link>
        <Link className="nav-icon" to="/">
          <img
            className="nav-icon logout-icon"
            src={logoutIcon}
            alt="logout icon"
          />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Nav);
