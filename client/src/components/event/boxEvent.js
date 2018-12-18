import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../VistaPrincipal.css";
import ModalMoreInfo from './ModalMoreInfo'
import eventService from "./EventService";

export default class boxEvent extends Component {
  constructor() {
    super();
    this.eventService = new eventService();
    this.state = {
      eventDetails: {}
    };
  }


  handleClick = id => {
    this.eventService
      .showEventId(id)
      .then(res => {
        this.setState({ ...this.state, eventDetails: res.data });
      })
      .catch(err => console.log(err));
  };
  
  render() {
    
    return <div>
        <h1>{this.state.eventDetails._id}</h1>
        <h1>{this.state.eventDetails.description}</h1>

        <div className="boxEvent">
          <div className="data-post">
            <button onClick={() => this.handleClick(this.props.elem._id)}>
              Details
            </button>
            <Link to={`/event/${this.props.elem._id}`}>
              <p>{this.props.elem.description}</p>
              <p>{this.props.elem.city}</p>
            </Link>
            
        <div>
          <ModalMoreInfo info={this.props.elem}/>
        </div>
          
          
            
          </div>
        </div>
      </div>;
  }
}
