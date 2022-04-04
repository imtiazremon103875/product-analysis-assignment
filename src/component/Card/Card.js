import React from 'react';
import './Card.css'

const Card = ({ review }) => {
    const { name, rating, text } = review;

    return (
        <div className='card'>
            <h4>Name: {name}</h4>
            <p className='text'>{text}</p>
            <p><small className='rating'> Rating: {rating}</small></p>

        </div>
    );
};

export default Card;