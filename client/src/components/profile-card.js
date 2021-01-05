import React from "react";

//Bootstrap Elements
import Card from 'react-bootstrap/Card'

//Rating
import StarRating from '../components/user-rating';

// authentication
import { useAuth0 } from "@auth0/auth0-react";


export default function ProfileCard (props) {
    const { user } = useAuth0();
    const { name, picture } = user; 
    
    return(
    <>
        <Card className="profile border-0">
            <img src= { picture } alt={name} className="profCircle" />
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Text><p>{props.city}, {props.state}</p></Card.Text>
                <StarRating />
                <Card.Text className="mt-3"><p><strong>Distance able to travel:</strong> {props.traveldist} miles</p></Card.Text>
            </Card.Body>
        </Card>
    </>
    )
}