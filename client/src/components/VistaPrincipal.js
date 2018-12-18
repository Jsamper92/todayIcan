import React, { Component } from "react";
import "./VistaPrincipal.css";
import CreateEvent from "./event/CreateEvent";
import Sidebar from './SideBar'
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
    return (
      <div className="bodyMain">
        <Sidebar usuarios={this.props.user}/>

        <div className="content">
        
          <CreateEvent usuarios={this.props.user}/>
        </div>
      </div>
    
    );
  }
}
