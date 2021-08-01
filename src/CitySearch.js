import React from 'react';
import {Form, Button} from 'react-bootstrap';

class CitySearch extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitLocation();
  }

  render() {
    return (
      <>
      
      <div className="city-form">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label><h1>City Explorer</h1></Form.Label>
          <Form.Control type="text" placeholder="type city name here..." onChange={this.props.updateCity}/>
        </Form.Group>
        <Button onClick={this.handleSubmit}>Explore!</Button>
      </Form>
    </div>
    </>
    )
  }
}

export default CitySearch;
