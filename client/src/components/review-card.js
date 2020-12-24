import React from "react";

export default function ReviewCard() {
    return (
    <div className="reviewCard mx-auto my-5">

        <div className="img-container d-flex justify-content-center">

            <div className ="circle"></div>

        </div>
        <div className="text-container">
            <p className="text-center mt-2">
                Quote Text
            </p>
            <h4>Name</h4>
        </div>

    </div>
    );
}

