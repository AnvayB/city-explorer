import React from 'react';
import axios from 'axios';
import Movies from './Movies';
import CitySearch from './CitySearch';
import Location from './Location.js'
import Weather from './Weather';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationData: {},
      showMap: false,
      mapSrc: null,
      forecastData: [],
      errorAlert: false,
      movieData: [],
    }
  }

  getLocation = async () => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      this.setState({
        locationData: response.data[0],
        showMap: true,
        mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=16&size=1000x1000`,
      });
    } catch (error) {
      alert(error);
    }
  }

  getWeather = async () => {
    try {
      const weatherQuery = `https://city-explorer-anvay.herokuapp.com/weather?searchQuery=${this.state.searchQuery}`;
      const weatherResponse = await axios.get(weatherQuery);

      this.setState({
        forecastData: weatherResponse.data,
      });
    } catch(error) {
      alert(error);
    }
  }

  getMovies = async () => {
    try {
      const movieQuery = `https://city-explorer-anvay.herokuapp.com/movies?searchQuery=${this.state.searchQuery}`;
      const movieResponse = await axios.get(movieQuery);

      this.setState({
        movieData: movieResponse.data,
      });
    } catch(error) {
      alert(error);
    }
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  submitLocation = async () => {
    this.getLocation();
    this.getWeather();
    this.getMovies();
  }

  render() {
    return (
      <>
        <CitySearch submitLocation={this.submitLocation} updateCity={this.updateCity} />
        <Location
          locationData={this.state.locationData}
          showMap={this.state.showMap}
          mapSrc={this.state.mapSrc}
        />
        <Weather forecastData={this.state.forecastData} />
        <Movies movieData={this.state.movieData} />
      </>
    );
  }
}

export default Main;
