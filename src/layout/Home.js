import React, { Component } from 'react'
import { Map, DirectionsExample } from '../custom'
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps'

const styles = {
  height: '25vh',
}

export default class Home extends Component {
  constructor() {
    super()
  }
  state = {
    markers: [
      {
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
      },
    ],
    origin: new google.maps.LatLng(41.85073, -87.65126),
    destination: new google.maps.LatLng(41.85258, -87.65141),
    directions: null,
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService()

    DirectionsService.route(
      {
        origin: this.state.origin,
        destination: this.state.destination,
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
        <DirectionsExample
          zoom={12}
          center={{
            lat: 40.58526,
            lng: -105.084423,
          }}
          containerElement={<div style={styles} />}
          mapElement={<div style={styles} />}
        />
      </div>
    )
  }
}
