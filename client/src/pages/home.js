import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
                <Container>
                        <ReviewSlide />  
                </Container>
        </div>
        )
}