import React, { Component } from 'react'
import { Map, DirectionsExample } from '../custom'
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'google-maps-react'

const styles = {
  height: '25vh',
}

const google = window.google

export default class Home extends Component {
  constructor() {
    super()
  }
  state = {
    origin: new google.maps.LatLng(40.5907246, -105.0832341),
    waypoints: new google.maps.LatLng(40.587395, -105.0850215),
    directions: null,
    markers: [
      {
        position: {
          lat: 40.58526,
          lng: -105.084423,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
      },
    ],
  }
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService()

    DirectionsService.route(
      {
        origin: this.state.origin,
        waypoints: this.state.waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          })
        } else {
          console.error(`error fetching directions ${result}`)
        }
      }
    )
  }

  render() {
    return (
      <div>
        Parade Route
        <Map
          zoom={12}
          center={{
            lat: 40.58526,
            lng: -105.084423,
          }}
          markers={this.state.markers}
          containerElement={<div style={styles} />}
          mapElement={<div style={styles} />}
        />
        Bars
        <Map
          zoom={12}
          center={{
            lat: 40.58526,
            lng: -105.084423,
          }}
          containerElement={<div style={styles} />}
          mapElement={<div style={styles} />}
        />
        Directions
        <Map
          zoom={12}
          center={{
            lat: 40.58526,
            lng: -105.084423,
          }}
          containerElement={<div style={styles} />}
          mapElement={<div style={styles} />}
          center={this.state.origin}
          directions={this.state.directions}
        />
      </div>
    )
  }
}
