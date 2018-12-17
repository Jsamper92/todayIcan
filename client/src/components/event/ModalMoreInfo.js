
import './ModalMoreInfo.css'
import React, { Component } from "react";
import EventService from "./EventService";
 const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};
 export default class ModalMoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
     this.state = {
      toggle: false,
      allEventsModal: null,
    }
    this.eventService = new EventService();
  }

  retrive = () => {
    this.eventService.showEventId('5c1120b8546f7c92899c1617')
      .then(res => {
        this.setState({ ...this.state,
          allEventsModal: [res.data]
        })
      })
  }


  componentWillMount() {
    this.retrive()
  }

   toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
  
   render() {
    
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
      <div className="closeModal">
      <i class="fas fa-times" onClick={this.toggle}></i>
      </div>
      {this.state.allEventsModal && this.state.allEventsModal.map((elem,index) => {
        console.log(elem)
        return(
          <div className="textModal" key={index}>
            <p>{elem.city}</p>
            <p>{elem.description}</p>
          </div>
          )
        }
        )
      }
        <h4></h4>
        <p>A bunch of text</p>
      </div>
      
    </div>
    );
    return (
      <div>
        <button className="btn" onClick={this.toggle}>More details</button>
        {modal}
      </div>
    );
  }
} 

