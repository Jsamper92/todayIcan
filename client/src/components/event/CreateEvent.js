import React, { Component } from 'react'
import EventService from './EventService'
import AllEvents from './allEvents'
import '../VistaPrincipal.css'
import {Switch } from "react-router-dom";
import NavBar from '../NavBar'


export default class CreateEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            city: '',
            redirect: false,
            detailsUser : this.props.usuarios
        }
        this.eventService = new EventService();
    }

    getEvent = event => {
        this.setState({ ...this.state,
            event
        });
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
          <NavBar/>
            <div className="cardEvent">
                

                <div className="row">
                    <div className="data-post">
                    <h3>Hola {this.props.usuarios.username},¿Quieres crear un evento?</h3>
                        <form onSubmit={this.handleFormSubmit}>
                            <input type="text" name="description" placeholder="description" onChange={e => this.handleChange(e)} />
                            <input type="text" name="city" placeholder="city" onChange={e => this.handleChange(e)} />
                            <input type="submit" value="createEvent" onClick={e => this.handleChange(e)}/>
                        </form>
                       
                        {/* <div className="map">
                            <MapContainer {...this.state}/>
                        </div> */}

                        
                        
                        <div className="comments">
                            <div>Comments</div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="allEvents">
            <Switch>
                    {(this.state) ? <AllEvents event={this.state} usuarios={this.props.usuarios} /> : <p>Loading...</p>}
            </Switch>           
            </div>

            
      </div>
    )
  }
}
