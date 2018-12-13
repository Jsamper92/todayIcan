import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../VistaPrincipal.css";
import EvenDetail from "./eventDetail";
import eventService from "./EventService";
export default class boxEvent extends Component {
  constructor() {
    super()
    this.eventService = new eventService()
    this.state = {
      eventDetail:{},
      show:false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  handleClick = (id) =>{
    this.eventService
      .showEventId(id)
      .then(res => {
        this.setState({ ...this.state, eventDetail:res.data})
      })
      .catch(err => console.log(err));
  }
  render() {
    
    return (
      <div>
        <h1>{this.state.eventDetail._id}</h1>
        <h1>{this.state.eventDetail.description}</h1>

        <div className="boxEvent">
          <div className="data-post">
            <button onClick={() => this.handleClick(this.props.elem._id)}>Details</button>
            <Link to={`/event/${this.props.elem._id}`}>
              <p>{this.props.elem.description}</p>
              <p>{this.props.elem.city}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
