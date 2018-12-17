import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: (pos, markPos) => {
        return (
          <Map
            google={window.google}
            className="map"
            center={this.state.currentLatLng}
            zoom={16}
            onClick={this.mapClicked}
            disableDefaultUI={true}
          >
            <Marker
              title={"The marker`s title will appear as a tooltip."}
              name={"SOMA"}
              position={pos}
            />
            <Marker
              animation={window.google.maps.Animation.DROP}
              title={"Añadir nuevo Punto Amigo"}
              name={"Punto Amigo"}
              position={markPos}
            />

            <InfoWindow onClose={this.onInfoWindowClose}>
              {/* <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div> */}
            </InfoWindow>
          </Map>
        );
      },
      currentLatLng: { lat: 30.5756449, lng: -4.0058049 },
      markPosition: { lat: 0, lng: 0 }
    };
  }

  getEvent = event => {
    this.setState({ ...this.state, event });
  };

  searchLocation = search => {
    this.getSearchLocation(this.state, { search: search });
  };

  handleInput = event => {
    this.setState({ ...this.state, search: event.target.value });
  };

  searchLocation = search => {
    this.props.getSearchLocation(this.state, { search: search });
  };

  render() {
    const pos = { lat: "40", lng: "-3" };
    const markPos = this.state.markPosition;
    const map = this.state.map(pos, markPos);
    return <div className="map">{map}</div>;
  }
}

GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API
})(MapContainer);

export default MapContainer;
