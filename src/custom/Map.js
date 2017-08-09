import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
    }
    this.mapMoved = this.mapMoved.bind(this)
  }

  mapMoved(map) {
    if (this.state.map != null) {
      return

      this.setState({
        map: map,
      })
    }
  }

  render() {
    const markers = this.props.markers || []

    return (
      <div>
        <GoogleMap
          ref={this.mapLoaded}
          onDragEnd={this.mapMoved}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
          {this.props.directions &&
            <DirectionsRenderer directions={this.props.directions} />}
          {markers.map((marker, index) => <Marker {...marker} />)}
        </GoogleMap>
      </div>
    )
  }
}

export default withGoogleMap(Map)
