import React from 'react';
import useReviews from '../../Hooks/UseReview';
import Card from '../Card/Card';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>this is are all reviews</h2>
            <div className='card-container'> {
                reviews.map(review => <Card key={review.id} review={review}></Card>)
            }</div>
        </div>
    );
};

export default Reviews;