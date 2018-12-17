import React, { Component } from "react";
import AuthService from "./auth/AuthService";
import "./NavBar.css";
import { Route, Switch } from "react-router-dom";
import VistaPrincipal from './VistaPrincipal'


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
    const styles= {color: '#4F5467'}
    return (
    <div className="classNameNavBar">
        <header className="navBar">
          <div className="navBarContent" style={styles}>
            <div>
              <span>
                <i className="fas fa-home" />
              <Switch>
                <Route path="/main" component={VistaPrincipal} />
              </Switch>
              </span>
            </div>
            <div><span>
            <i className="fas fa-user" />
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
      )
  }
}
