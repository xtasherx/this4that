import React from "react";
import Button from 'react-bootstrap/Button'
import Wrapper from "../components/Wrapper";

import Card from 'react-bootstrap/Card'

// employee info
// import user from "../user.json";

export default function SmUser () {
    return(
        <div>
            <Button>
            <Wrapper>
            <Card style={{ width: '18rem' }}>
                <div className ="circle"></div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Rating Here
                    </Card.Text>
                </Card.Body>
            </Card> 
            </Wrapper>
        </Button>
    </div>
    );
}
