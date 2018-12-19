import React, { Component } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import VistaPrincipal from "./components/VistaPrincipal";
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import AuthService from "./components/auth/AuthService";
import { Route, Link, Switch } from "react-router-dom";



class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      event:{}
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

  getEvent = event =>{
    this.setState({...this.setState,event})
    
  }


  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  render() {
    const vistaprincipal = this.state.user ? (
      <div>
        <Switch>
            <Route path="/main" component={()=><VistaPrincipal user={this.state.user} />}/>
            <Route path="/profile" component={()=><Profile usuarios={this.state.user}/>}/>
        </Switch>
      </div>
    ) : (
      <div>
        <p>No user</p>
        <Link to="/">Home</Link> - 
        <Link to="/signup">Signup</Link> -{" "}
        <Link to="/login">Login</Link>
        
      </div>
    );

    return (
      <div className="App">
        {vistaprincipal}
        <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />}/>
        {!this.state.user &&  <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />}
        {this.state.user &&  <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />}

      </div>
    );
  }
}

export default App;
