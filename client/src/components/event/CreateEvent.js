import React, { Component } from 'react'
import EventService from './EventService'
import AllEvents from './allEvents'
import '../VistaPrincipal.css'
import { Route, Link, Switch } from "react-router-dom";
import EvenDetail from './eventDetail';

export default class CreateEvent extends Component {
    constructor(){
        super();
        this.state = {
            description: '',
            city: '',
            redirect: false
        }

        this.eventService = new EventService();
    }
    getEvent = event => {
        this.setState({ ...this.state,event});
    };

    handleFormSubmit = (e) => {
    e.preventDefault();

    const {description, city} = this.state;

    this.eventService.createEvent({description,city})
    .then(event => {
      this.getEvent(event)
      this.setState({description: '', city: '', redirect: true})
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ ...this.state,[name]: value});
  }
  render() {
    return (
      <div>
            <div className="cardEvent">
                <div className="row">
                    <div className="col-xs-3 col-sm-2">
                        <a title="profile" />
                    </div>

                    <div className="info-user">
                        <h3>
                            <a href="personal-profile.html" title="Profile" />
                        </h3>
                        <p>
                            <i>2h</i>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="data-post">
                        <p>Crear evento</p>
                        <form onSubmit={this.handleFormSubmit}>
                            <input type="text" name="description" placeholder="title" onChange={e => this.handleChange(e)} />
                            <input type="text" name="city" placeholder="title" onChange={e => this.handleChange(e)} />
                            <input type="submit" value="createEvent" onClick={e => this.handleChange(e)}/>
                        </form>
                        <div className="reaction">
                            <p>imagen</p>
                        </div>
                        <div className="comments">
                            <div>Comments</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="allEvents">
            <Switch>
                     
                    {(this.state) ? <AllEvents event={this.state} /> : <p>Loading...</p>}
            </Switch>           
            </div>
      </div>
    )
  }
}
