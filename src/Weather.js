import React from 'react';
import './Weather.css';


class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.forecastData.map( (value) =>
          <div className="forecast-list"  >
            <p>Date: {value.date}</p>
            <p>{value.description}</p>
          </div>
        )}
      </>
    );
  }
}

export default Weather;
