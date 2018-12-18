import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../VistaPrincipal.css";
import ModalMoreInfo from "./ModalMoreInfo";
import eventService from "./EventService";

export default class boxEvent extends Component {
  constructor(props) {
    super(props);
    this.eventService = new eventService();
    this.state = {
      eventDetails: null,
      detailsUser: this.props.usuarios
    };
  }

  componentDidMount(id = this.props.elem._id) {
    this.eventService
      .showEventId(id)
      .then(res => {
        this.setState({ ...this.state, eventDetails: res.data });
      })
      .catch(err => console.log(err));
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
    // console.log(this.state.eventDetails.author.pictureUrl);
    return <div>
        {/* {this.state.eventDetails && (
          <div>
            
            <h1> {this.state.eventDetails._id} </h1>
            <h1> {this.state.eventDetails.description} </h1>
          </div>
        )} */}

        <div className="boxEvent">
          <div className="data-post">
            <div className="row" />
            {/* <button onClick={() => this.handleClick(this.props.elem._id)}>
              Details
            </button> */}
            {this.state.eventDetails && <Link to={`/event/${this.props.elem._id}`} className="link">
                <img className="imgUser" src={this.state.eventDetails.author.pictureUrl} />
                <p>{this.state.eventDetails.author.username}</p>
                <p>{this.props.elem.description}</p>
                <p>{this.props.elem.city}</p>
              </Link>}

            <div>
              <ModalMoreInfo info={this.props.elem} />
            </div>
          </div>
        </div>
      </div>;
  }
}
