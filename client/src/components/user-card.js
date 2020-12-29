import React from "react";
import Card from 'react-bootstrap/Card'

import StarRating from '../components/user-rating';

import { useAuth0 } from "@auth0/auth0-react";


export default function UserCard () {
    const { user } = useAuth0();
    const { name, picture } = user; 
    
    return(
    <>
        <Card>
            <img src= { picture } alt={name} className="rounded-circle img-fluid" />
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <StarRating />
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
            </Card.Body>
        </Card>
    </>
    )
}