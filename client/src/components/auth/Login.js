import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect,Link} from "react-router-dom";
import './loginSignup.css'
import Signup from './Signup'

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      imgUrl:''
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password} = this.state;

    this.authService.login({username, password})
    .then(user => this.props.getUser(user));
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to = "/" / >
    }
    
    return (
      
      
      <div className="bodySignUpLogin">
        

      
        <form className="body" onSubmit={this.handleFormSubmit}>
        <h2>Login</h2>
          <label>Username</label>
          <input type="text" name="username" onChange={e => this.handleChange(e)} />


          

          <label>Password</label>
          <input type="password" name="password" onChange={e => this.handleChange(e)} />

          
          <input className="inputButton" type="submit" value="Login"/>
          
          
        </form>


      </div>
    )
  }
}