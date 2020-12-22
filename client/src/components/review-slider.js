import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

import ReviewCard from './review-card';


class ReviewSlide extends Component {

render() {
    return (
        <ReactCardCarousel autoplay={ false }>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
    </ReactCardCarousel>
    );
    }
}

export default ReviewSlide;

