import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ReviewCard from './review-card';

export default function CarouselComponent() {
    return (
        <div className="revSlide">
            <Carousel infiniteLoop useKeyboardArrows showStatus={false} showThumbs={false} centerMode={true}>

                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                
            </Carousel>
        </div>
    );
}