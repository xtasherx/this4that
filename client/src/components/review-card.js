import React from "react";

// icons
import { FaStar } from "react-icons/fa";

// employee info
import review from "../review.json";

export default function ReviewCard() {
        return (
            <>
            {review.map(e => (
                <div className="reviewCard ">
                <div className="text-container">
                    <p className="mx-auto mt-2 reviewText">
                        {e.review}
                    </p>
    
                    <div className="setStar">
                    {[...Array(5)].map((star) => {
                        return ( 
                            <FaStar />
                        );
                    })}
                    </div>
                </div>
            </div>
    
            ))}
        </>
        );
}

