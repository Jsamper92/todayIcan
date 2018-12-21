import React, { Component } from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import Sidebar from "./SideBar";
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

  retrive = (id = this.props.usuarios._id) => {
    // this.eventService.showEvents().then(res => {
    //   this.setState({ ...this.state, allEvents: [res.data] });
    // });
    this.eventService
      .showEventUser(id)
      .then(res => {
        this.setState({ ...this.state, allEvents: [res.data] });
      })
      .then(res => {
        this.setState({ ...this.state, eventDetails: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.retrive();
  }

  render() {
    console.log(this.props.usuarios.pictureUrl);
    if (this.state.allEvents) {
      console.log(this.state);
    }
    return <div className="bodyProfile">
        <div style={{ marginTop: "100px" }}>
          {this.state.allEvents && this.state.allEvents[0].map(
              (elem, i) => (
                <div key={i}>
                <div className="containerEvents">    
                 <div className="boxEvent boxEventUserProfile">
                    <div className="data-post">
                    <div className="row">
                        <div className="col-xs-3 col-sm-2">
                          <img
                            className="imgUser"
                            src={elem.author.pictureUrl}/>
                        </div>
                        <div className="col-xs-3 col-sm-2">
                          <p>{elem.username}</p>
                        </div>
                        <p>{elem.description}</p>
                        <p>{elem.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              )
            )}
          <NavBar logout={this.props.logout} />
          <Sidebar usuarios={this.props.usuarios} />
        </div>
      </div>;
  }
}
