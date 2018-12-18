import React, { Component } from 'react'
import NavBar from './NavBar'
import './NavBar.css'
import Sidebar from './SideBar'
import './VistaPrincipal.css'
export default class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
          evenDetails: this.props.usuarios

    }
  }
  render() {
    
    return (
      <div>
        
        <div>
          <NavBar/>
          <Sidebar usuarios={this.props.usuarios}/>
             <h1>hola</h1>
        </div>
       
      </div>
    )
  }
}
