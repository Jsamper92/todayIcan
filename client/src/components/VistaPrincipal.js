import React, { Component } from "react";
import "./VistaPrincipal.css";
import CreateEvent from "./event/CreateEvent";
export default class VistaPrincipal extends Component {
  constructor(props){
    super(props)
    this.state = {
      detailsUser : this.props.usuarios
    }
  }

  render() {
    const vistaprincipal = this.props.user ? (
      <p>{this.props.user.username}</p>
    ) : (
      <p>Hola no usuario</p>
    );
    console.log(this.props.user)
    return (
      <div className="bodyMain">
        <div className="sidebar">
          {this.props.user && (
            <img
              src={this.props.user && this.props.user.pictureUrl}
              alt="User name"
              className="img-circle img-user"
            />
          )}
          {vistaprincipal}

          
          <p className="text-center user-description hidden-xs">
            <i>{this.props.user && this.props.user.description}</i>
          </p>
        </div>

        <div className="content">
          <CreateEvent usuarios={this.props.user}/>
        </div>
      </div>
    
    );
  }
}
