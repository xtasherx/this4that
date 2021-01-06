import React, { Component } from 'react';

// React Slider imports
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Components
import ReviewCard from './review-card';

class ReviewSlide extends Component {
    render() {
        return (
        <div className="revSlide">
            <Carousel autoplay={ false } infiniteLoop={false} showArrows={true} showStatus={false} showThumbs={false}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </Carousel>
        </div>
        );
    }
}

export default ReviewSlide;
