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
        this.setState({...this.state, allEvents:[res.data]})
       
      })
    }

    
    componentWillMount() {
      this.retrive()
    }
    
  render() {
    console.log(this.state)
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
