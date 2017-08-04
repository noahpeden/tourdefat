import React, { Component } from 'react';
import './App.css';
import { Home } from './layout'


// const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyBcZEw_adzFSmCz1zuwSYoVogvkigZVRIw"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
