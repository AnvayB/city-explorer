import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      map: ''
    }
  }
  
  getLocation = async(e) => {
    e.preventDefault(); //stops form from reloading and clearing inputs
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log('LOCATION IQ DATA:', response);

    this.setState({ location: response.data[0]});

    const MAP = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.location.lat},${this.state.location.lon}&zoom=10`;
    const respond = await axios.get(MAP);
    console.log(this.state.map);
    this.setState({ map: respond.config.url});

    
  }
  
  render () {
    return (
      <div>
        <h1>City Explorer</h1>
        <hr />
       
        <Form onSubmit = {this.getLocation}>
          <Form.Group>
            <Form.Label>City Name</Form.Label>
            <Form.Control id = "form" onChange = {(e) => this.setState({ searchQuery: e.target.value})} placeholder = "type city name here..." type="text" />
            <Button variant="primary" type="submit">
              Explore!
            </Button>
            <Form.Text>
            <br />
            Location: {this.state.location.display_name} <br />
            Location ID: {this.state.location.place_id} <br />
            Latitude: {this.state.location.lat} <br />
            Longitude: {this.state.location.lon} <br />
            <img src = {this.state.map} alt=""/>
            </Form.Text>
          </Form.Group>
        </Form>

        

      </div>
    )
  }s
}

export default App;
