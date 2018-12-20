import React, { Component } from 'react'
import EventService from './EventService'
import AllEvents from './allEvents'
import '../VistaPrincipal.css'
import {Switch } from "react-router-dom";
import NavBar from '../NavBar'
import AuthService from '../auth/AuthService';


export default class CreateEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            city: '',
            redirect: false,
            detailsUser : this.props.usuarios
        }
        this.authService = new AuthService();
        this.eventService = new EventService();
    }

    logout = () => {
        this.authService
            .logout()
            .then(() => this.setState({ ...this.state,
                user: null
            }));
    };

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
          <NavBar logout={()=>{this.logout()}}/>
            <div className="cardEvent ">
                <h3>Hola {this.props.usuarios.username},¿Quieres crear un evento?</h3>
                <div className="row">
                    <div className="data-post">
                   
                        <form className="formCreateEvent" onSubmit={this.handleFormSubmit}>
                            <input type="text" name="description" placeholder="description" onChange={e => this.handleChange(e)} />
                            <input type="text" name="city" placeholder="city" onChange={e => this.handleChange(e)} />
                            <input type="submit" value="Crear Evento" onClick={e => this.handleChange(e)}/>
                        </form>
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
