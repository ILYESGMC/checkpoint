import React from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
             <Card style={{ width: '14rem'}}>
            <Card.Img variant="top" src={movie.posteUrl} style={{width:"220px", height :"220px"}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={movie.rate}
               />
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
