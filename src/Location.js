import React from 'react';

class Location extends React.Component {
  render() {
    return (
      <div className="location-data">
        <p>Location: {this.props.locationData.display_name}</p>
        <p>Latitude: {this.props.locationData.lat}</p>
        <p>Longitude: {this.props.locationData.lon}</p>
        {this.props.showMap && <img alt="map" src={this.props.mapSrc} />}
      </div>
    );
  }
}

export default Location;