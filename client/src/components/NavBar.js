import React, { Component } from 'react'
import AuthService from "./auth/AuthService";

export default class NavBar extends Component {
    constructor(props){
        super(props)

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
    return (
      <div>
          <header>
            
            <div></div>
            <div></div>
            <div></div>
            <button onClick={()=>this.props.logout()}>logout</button>
          </header>
      </div>
    )
  }
}
