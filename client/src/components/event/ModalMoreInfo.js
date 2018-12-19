import "./ModalMoreInfo.css";
import React, { Component } from "react";
import EventService from "./EventService";
const display = {
  display: "block"
};
const hide = {
  display: "none"
};
export default class ModalMoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false,
      allEventsModal: null,
      eventDetails: this.props.info,
      arrayPlan: this.props.arrayPlan
    };
    this.eventService = new EventService();
  }

  retrive = id => {
    this.eventService.showEventId("5c1120b8546f7c92899c1617").then(res => {
      this.setState({ ...this.state, allEventsModal: [res.data] });
    });
  };

  handleClick = id => {
    this.eventService
      .showEventId(id)
      .then(res => {
        this.setState({ ...this.state, eventDetails: res.data });
      })
      .catch(err => console.log(err));
  };

  componentWillMount() {
    this.retrive();
    
  }

  toggle = id => {
    this.eventService
      .showEventId(id)
      .then(res => {
        this.setState({ ...this.state, eventDetails: res.data });
      })
      .catch(err => console.log(err));
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <div className="closeModal">
            <i className="fas fa-times" onClick={this.toggle} />
          </div>
          <div className="textModal" >
            <p>{this.props.info.description}</p>
            <p>{this.props.info.city}</p>
            <h1>Asistentes al evento:</h1>
            <p>{this.props.arrayPlan}</p>
          </div>

        </div>
      </div>
    );
    return (
      <div>
        <button className="btn" onClick={this.toggle}>
          More details
        </button>
        {modal}
      </div>
    );
  }
}
