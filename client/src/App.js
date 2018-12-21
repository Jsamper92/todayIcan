import React, { Component } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import VistaPrincipal from "./components/VistaPrincipal";
import Profile from "./components/Profile";
import AuthService from "./components/auth/AuthService";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      event: {}
    };

    this.authService = new AuthService();

    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  getEvent = event => {
    this.setState({ ...this.setState, event });
  };

  logout = () => {
    this.authService.logout()
    .then((res) => {
      console.log(res)
      this.setState({ ...this.state, user: null });
    });
  };

  render() {
    const vistaprincipal = this.state.user ? (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <VistaPrincipal logout={this.logout} user={this.state.user} />}
          />
          <Route
            path="/profile"
            component={() => <Profile logout={this.logout} usuarios={this.state.user} />}
          />
        </Switch>
      </div>
    ) : (
      <div>
        
        {/* <Link to="/signup">Signup</Link> - <Link to="/login">Login</Link> */}
        <Signup component={Login} getUser={this.getUser} />
      </div>
    );

    return (
      <div className="App">
        {vistaprincipal}
        <Route
          exact
          path="/signup"
          render={() => <Signup getUser={this.getUser} />}
        />
        {!this.state.user && (
          <Route
            exact
            path="/login"
            render={() => <Login getUser={this.getUser} />}
          />
        )}
        {this.state.user && (
          <Route
            exact
            path="/login"
            render={() => <VistaPrincipal user={this.state.user} />}
          />
        )}
      </div>
    );
  }
}

export default App;
