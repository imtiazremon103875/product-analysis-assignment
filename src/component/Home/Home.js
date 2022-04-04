import React from 'react';
import ThreeReviews from '../ThreeReviews/ThreeReviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className="home-details">
                    <h1 className='headline'>Movie lovers Bangladesh</h1>
                    <h2>3 idiots Movie rating</h2>
                    <p className='home-para'>Three Idiots’ is a remarkable ahead of its time Bollywood blockbuster. This film is a comedy movie with strong acting, memorable characters, a perplexing storyline and most importantly, highly motivational movie to choose the right path in your life.The producers of the movie expressed some amazing scenery of the mountainous landscape of Ladakh. These scenes were taken with various different camera angles such as high angle, crane and parallax shots</p>
                </div>
                <div className="image-container">
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg" alt="" />
                </div>

            </div>
            <ThreeReviews></ThreeReviews>
        </div>
    );
};

export default Home;