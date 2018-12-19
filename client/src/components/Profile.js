import React, { Component } from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import Sidebar from "./SideBar";
import BoxEvent from "./event/boxEvent";
import "./VistaPrincipal.css";
import EventService from "./event/EventService";
import AuthService from "./auth/AuthService";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenDetails: this.props.usuarios
    };
    this.authService = new AuthService();
    this.eventService = new EventService();
  }

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  componentDidMount(id = this.props.usuarios._id) {
    this.eventService
      .showEventId(id)
      .then(event => {
        this.setState({ ...this.state, allEvents: [event.data] });
      })
      .then(res => {
        this.setState({ ...this.state, eventDetails: res.data });
      })
      .catch(err => console.log(err));
  }

  retrive = (id=this.props.usuarios._id) => {
    // this.eventService.showEvents().then(res => {
    //   this.setState({ ...this.state, allEvents: [res.data] });
    // });
    this.eventService
      .showEventId(id)
      .then(res => {
        this.setState({ ...this.state, allEvents: [res.data ]});
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.retrive();
  }

  render() {
    console.log(this.state.allEvents);
    if (this.state.allEvents) {
      console.log(this.state);
    }
    return (
      <div>
        <div style={{ marginTop: "150px" }}>
          {this.state.allEvents &&
            this.state.allEvents[0].map((elem, i) => (
              <div key={i}>{elem.description}</div>
            ))}
          <NavBar
            logout={() => {
              this.logout();
            }}
          />
          <Sidebar usuarios={this.props.usuarios} />
        </div>
      </div>
    );
  }
}
