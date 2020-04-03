import React, { Component } from "react";
import axios from "axios";
import { getUser } from "../../redux/reducer";
import { connect } from "react-redux";
import Logo from "./helo_logo.png";

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
    axios
      .post("/api/register", { username, password })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  handleLogin = () => {
    const { username, password } = this.state;
    axios
      .post("/api/login", { username, password })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="landing-page">
        <section className="login-card">
          <img className="logo" src={Logo} alt="helo logo" />
          <h1>Helo</h1>
          <section className="input-container">
            <p>Username:</p>
            <input
              className="username-box"
              name="username"
              onChange={e => this.handleInput(e)}
            />
          </section>
          <section className="input-container">
            <p>Password:</p>
            <input
              name="password"
              type="password"
              onChange={e => this.handleInput(e)}
            />
          </section>
          <section className="login-register-buttons">
            <button className="button" onClick={this.handleLogin}>
              Login
            </button>
            <button className="button" onClick={this.handleRegister}>
              Register
            </button>
          </section>
        </section>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);
