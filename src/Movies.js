import React from 'react';
import {Card} from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    return (
      <div className="movies-list">
        {this.props.movieData.map( (value) =>
          <>
            <Card style={{width:'30%', display: "flex", justifyContent: "center", alignItems: "center"}}>
              <img src={value.image_URL} alt="" ></img>
              <Card.Title>{value.title}</Card.Title>
              <Card.Body>
                <p>Release Date: {value.releasedOn}</p>
                <p>Popularity: {value.popularity}</p>
                <p>Description: {value.overview}</p>
                <p>Avg Votes: {value.avgVotes}; Total Votes: {value.totalVotes}</p>
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    );
  }
}

export default Movies;
