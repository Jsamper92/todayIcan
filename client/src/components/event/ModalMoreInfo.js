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
      allEventsModal:null
    }

    this.eventService = new EventService();
  }

  retrive = () => {
      this.eventService.showEvents()
      .then(res=>{
        
        this.setState({...this.state, allEventsModal:[res.data]})
        
      })
    }

    
    componentWillMount() {
      this.retrive()
    }

  toggle() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
      {/* {this.state.allEventsModal && this.state.allEventsModal.map((elem,index) => {
        
        return(
          
          <p>{this.elem}</p>
        
        
          )
        }
        )
        
        
      } */}
      <p>texto</p>
      </div>
      <div className="modal-footer">
        <a className="btn" onClick={this.toggle}>Close</a>
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