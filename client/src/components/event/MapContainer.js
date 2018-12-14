import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {
  render() {
    return (
        <Map google={window.google}
          style={style}
          center={{
            lat: 40.854885,
            lng: -88.081807
          }}

          zoom={9}
          onClick={this.mapClicked}>

           <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} 
    />

            <InfoWindow onClose={this.onInfoWindowClose}>
            
            </InfoWindow>
        </Map>
    )
  }
}

 export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API)
})(MapContainer)
