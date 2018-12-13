import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../VistaPrincipal.css';
export default class boxEvent extends Component {
   
  render() {
    return (
      
      <div>
        <div className="boxEvent">
          <div className="data-post">
            <p>{this.props.elem.description}</p>
            <p>{this.props.elem.city}</p>
          </div>
        </div>
      </div>
      
    );
  }
}
