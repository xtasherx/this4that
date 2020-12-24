import React from "react";

import ReviewSlide from "../components/review-slider";

//Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

//buttons
import LoginButton from "../components/login-button";
import SignupButton from "../components/signup-button";


export default function Home () {
        return(
        <div>
                <Jumbotron fluid className="jumbotron">
                        <Container>
                                <h1>Fluid jumbotron</h1>
                                <p>
                                This is a modified jumbotron that occupies the entire horizontal space of its parent.
                                </p>
                                <LoginButton className/> &emsp;<SignupButton />
                        </Container>
                </Jumbotron>

                <div>
                        <ReviewSlide />  
                </div>
        </div>

        )
}