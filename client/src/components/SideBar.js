import React, { Component } from 'react'

export default class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
            evenDetails:this.props.usuarios
        }
    }
  render() {
      console.log(this.props.usuarios)
    return (
      <div>
        <div className="sidebar">
          
            <img
              src={this.props.usuarios.pictureUrl}
              alt="User name"
              className="img-circle img-user"
            />
          
          

          
          <p className="text-center user-description hidden-xs">
            <i>{this.props.user && this.props.user.description}</i>
          </p>
        </div>
      </div>
    )
  }
}
