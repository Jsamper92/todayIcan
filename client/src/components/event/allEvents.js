import React, { Component } from 'react'
import BoxEvent from './boxEvent'

import EventService from './EventService'

export default class allEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: null,
            detailsUser: this.props.usuarios
        }
        this.eventService = new EventService();
    }
    

    retrive = () => {
      this.eventService.showEvents()
      .then(res=>{
        let allEvents = res.data.reverse()
        this.setState({ ...this.state,
          allEvents: [allEvents]
        })
       
      })
    }

    
    componentWillMount() {
      this.retrive()
    }
    
  render() {
    this.retrive()
    return (
      <div className="cardEvent">
        {
          this.state.allEvents && this.state.allEvents[0].map((elem,index) => {
          
          return (
             <BoxEvent key={index} elem={elem} usuarios={this.props.usuarios}/>
          )
        })}
       
      </div>
    )
  }
}
