import React from "react";

// icons
import { FaStar } from "react-icons/fa";



export default function ReviewCard() {

        return (
            // isAuthenticated && (
                <div className="reviewCard ">
                <div className="img-container justify-content-center" >
                    {/* <img src={ picture } className="circle" alt={name} /> */}
            </div>
                <div className="text-container">
                    {/* <h5 className="mt-1">{ name }</h5> */}
                    <p className="mx-auto mt-2 reviewText">
                        Unidentified vessel travelling at sub warp speed, bearing 235.7. Fluctuations in energy readings from it, Captain. All transporters off. A strange set-up, but I'd say the graviton generator is depolarized.
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
            // )
        );
}

