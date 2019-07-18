import React from "react"
import { GoogleApiWrapper, Map, Marker } from "google-maps-react"

class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 40.854885, lng: -88.081807 }}
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
