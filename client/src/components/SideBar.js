import React, { Component } from 'react'

export default class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
            evenDetails:this.props.usuarios
        }
    }
  render() {
    return (
      <div>
        <div className="sidebar">
          
            <img
              src={this.props.usuarios.pictureUrl}
              alt="User name"
              className="img-circle img-user"
            />
          
          

          
          <p className="text-center user-description hidden-xs">
          <p>{this.props.usuarios && this.props.usuarios.username}</p>
            <p>{this.props.usuarios && this.props.usuarios.description}</p>
          </p>
        </div>
      </div>
    )
  }
}
