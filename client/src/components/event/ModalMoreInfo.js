import React, { Component } from "react";


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
      toggle: false
    }
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
        <h4></h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a className="btn" onClick={this.toggle}>cLOSE</a>
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