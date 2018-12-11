import React, { Component } from "react";
import "./VistaPrincipal.css";
export default class VistaPrincipal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const vistaprincipal = this.props.user ? (
      <p>{this.props.user.username}</p>
      
    ) : (
      <p>Hola no usuario</p>
    );

    
    return <div className="bodyMain">
        <div className="sidebar">
        {this.props.user && <img src={this.props.user && this.props.user.pictureUrl} alt="User name" className="img-circle img-user" />}
          {vistaprincipal}

          <h2 className="text-center hidden-xs">
            <a href="personal-profile.html" title="Profile" />
          </h2>
          <p className="text-center user-description hidden-xs">
            <i>
              {this.props.user && this.props.user.description}
            </i>
          </p>
        </div>

        <div className="content">
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
                <form>
                  <input placeholder="Evento" />
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
        </div>
        
      </div>;
  }
}
