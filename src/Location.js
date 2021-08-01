import React from 'react';

class Location extends React.Component {
  render() {
    return (
      <div className="location-data">
        <p>Location: {this.props.locationData.display_name}</p>
        <p>Latitude: {this.props.locationData.lat}</p>
        <p>Longitude: {this.props.locationData.lon}</p>
        {this.props.showMap && <img alt="map" src={this.props.mapSrc} />}
        {/* Location: {this.state.location.display_name} <br />
        Location ID: {this.state.location.place_id} <br />
        Latitude: {this.state.location.lat} <br />
        Longitude: {this.state.location.lon} <br />
        <img src = {this.state.map} alt=""/> */}
      </div>
    );
  }
}

export default Location;