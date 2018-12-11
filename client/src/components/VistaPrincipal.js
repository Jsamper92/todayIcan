import React, { Component } from 'react'
import './VistaPrincipal.css'
export default class VistaPrincipal extends Component {
  render() {
    const vistaprincipal = this.props.user ? <p>Hola usuario</p> : <p>Hola no usuario</p>
    return (
      <div className="bodyMain">
        <div className="sidebar">
            <a href="personal-profile.html" title="Profile">
              <img src="img/user.jpg" alt="User name" className="img-circle img-user"/>
            </a>
            <h2 className="text-center hidden-xs"><a href="personal-profile.html" title="Profile"></a></h2>
            <p className="text-center user-description hidden-xs">
              <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
            </p>
        </div>

        <div className="content">
            <div className="cardEvent">
              <div className="row">
                <div className="col-xs-3 col-sm-2">
                  <a title="profile">

                  </a>
                </div>

                <div className="col-xs-9 col-sm-10 info-user">
                    <h3><a href="personal-profile.html" title="Profile">My User</a></h3>
                    <p><i>2h</i></p>
                </div>
              </div>

              <div className="row">
                <div className="data-post">
                            <p>Crear evento</p>
                            <form>
                              <input placeholder="Evento"></input>
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
        {vistaprincipal}
      </div>
    )
  }
}