import React, { Component } from 'react'
import axios from "axios";
import BoxEvent from './boxEvent'
import EventService from './EventService'

export default class allEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: null
        }
        this.eventService = new EventService();
    }
   

    retrive = () => {
      this.eventService.showEvents()
      .then(res=>{
        console.log(res.data)
        this.setState({...this.state, allEvents:[res.data]})
      })
    }

    componentWillMount() {
      this.retrive()
    }
    
  render() {
    return (
      <div className="cardEvent">
        {
          this.state.allEvents && this.state.allEvents.map((elem,index) => {

          return (
           <BoxEvent key={index} elem={elem}/>
          )
        })}
       
      </div>
    )
  }
}
