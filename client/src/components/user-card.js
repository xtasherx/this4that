import React from "react";
import Card from 'react-bootstrap/Card'

import StarRating from '../components/user-rating';

// import { useAuth0 } from "@auth0/auth0-react";

// const Profile = () => {
// const { user } = useAuth0();
// const { name, picture, email } = user; 

export default function UserCard () {
    return(
    <div>
        <Card style={{ width: '18rem' }}>
            <div className ="circle"></div>
            <Card.Body>
            <Card.Title>Name</Card.Title>
            <StarRating />
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
    )
}