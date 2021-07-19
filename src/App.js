import React from 'react';
import 'axios';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }
  
  getLocation = async() => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log('LOCATION IQ DATA:', response);

    this.setState({ location: response.data[0]});
  }
  
  
  
  
  
  render () {
    return (
      <div>
        <input onChange = {(e) => this.setState({ searchQuery: e.target.value})}
        placeholder = "type city name here..." type="text" />
        <button onClick = {this.getLocation}>Explore!</button>

        <p>
          Location: {this.state.location.display_name}
        </p>
        <p>
          Location ID: {this.state.location.place_id}
        </p>
        <p>
          Latitude: {this.state.location.lat}
        </p>
        <p>
          Longitude: {this.state.location.lon}
        </p>
      </div>
    )
  }
}

export default App;
