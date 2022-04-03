import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/UseReview';
import Card from '../Card/Card';
import './ThreeReview.css'

const ThreeReviews = () => {
    const [reviews, setReviews] = useReviews();

    const threeReviews = reviews.filter(review => review.id < 4)
    console.log(threeReviews)
    return (
        <div>
            <h1>Audience Review(3)</h1>

            <div className='card-container'>
                {
                    threeReviews.map(review => <Card key={review.id} review={review}></Card>)
                }</div>

            <button className='see-all-btn'>
                <Link to="/reviews"> See all Reviews</Link>
            </button>
        </div>
    );
};

export default ThreeReviews;