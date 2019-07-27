import React from "react"
import { GoogleApiWrapper, Map, Marker } from "google-maps-react"
import { mapStyles } from "../constants"

class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: 28.472058, lng: 77.043836 }}
        styles={mapStyles}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
})(GoogleMap)
