import React, { Component } from "react";
import axios from "axios";
import { getUser } from "../../redux/reducer";
import { connect } from "react-redux";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = () => {
    const { username, password } = this.state;
    axios.post("/api/register", { username, password }).then(res => {
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
    });
  };

  handleLogin = () => {
      const { username, password } = this.state;
      axios.post('/api/login', { username, password})
      .then(res => {
          this.props.getUser(res.data);
          this.props.history.push('/dashboard')
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Username:</p>
        <input
          placeholder="Username"
          name="Username"
          onChange={e => this.handleInput(e)}
        />
        <p>Password:</p>
        <input
          placeholder="Password"
          name="Password"
          type="password"
          onChange={e => this.handleInput(e)}
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);
