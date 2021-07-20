import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import Alert from 'react-bootstrap/Alert';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      map: '',
      errorAlert: true,
    }
  }
  
  getLocation = async(e) => {
    e.preventDefault(); //stops form from reloading and clearing inputs
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log('LOCATION IQ DATA:', response);
    this.setState({ location: response.data[0]});


    const MAP = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`;
    const respond = await axios.get(MAP);
    console.log(this.state.map);
    this.setState({ map: respond.config.url});
    this.setState({ errorAlert: false})
    } 
    catch (error) {
      this.setState({errors: error.response.status, errorAlert: true, map: '', location: {}})
    }
  }

  
  render () {
    return (
      <div>
        <h1>City Explorer</h1>
        <hr />
       
        <Alert className = "alert" show={this.state.errorAlert} variant="warning">
          Error {this.state.errors}: Unable to geocode <br />
          Please enter a city below.
        </Alert>


        <Form onSubmit = {this.getLocation}>
          <Form.Group>
            <Form.Label>City Name</Form.Label>
            <Form.Control id = "form" onChange = {(e) => this.setState({ searchQuery: e.target.value})} placeholder = "type city name here..." type="text" />
            <Button variant="primary" type="submit">
              Explore!
            </Button>
            <Form.Text className = "text">
            <br />
            Location: {this.state.location.display_name} <br />
            Location ID: {this.state.location.place_id} <br />
            Latitude: {this.state.location.lat} <br />
            Longitude: {this.state.location.lon} <br />
            <img src = {this.state.map} alt=""/>
            <hr />
            </Form.Text>
          </Form.Group>
        </Form>

        

      </div>
    )
  }s
}

export default App;
