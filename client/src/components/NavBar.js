import React, { Component } from "react";
import AuthService from "./auth/AuthService";
import "./NavBar.css";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import VistaPrincipal from "./VistaPrincipal";
import ProfilePage from "./Profile";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.authService = new AuthService();

    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  render() {
    const styles = { color: "#4F5467" };
    return (
      <div className="classNameNavBar">
        <header className="navBar">
          <div className="navBarContent" style={styles}>
            <div>
              <span>
                
                  <Link to="/" style={{ color: "white" }}>
                    <i className="fas fa-home" />
                  </Link>
                
              </span>
            </div>
            <div>
              <span>
                
                  <Link to="/profile" style={{ color: "white" }}>
                    <i className="fas fa-user" />
                  </Link>
              
              </span>
            </div>
            <div onClick={() => this.props.logout()}>
              <span>
                <i className="fas fa-sign-out-alt" />
              </span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
