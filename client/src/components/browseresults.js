import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
// Authentication
import { useAuth0 } from "@auth0/auth0-react";
import API from '../utils/API';

function BrowseResults (props) {
    const { user } = useAuth0();
    const { sub } = user; 
    let userId = "";

    function handleButtonClick(e) { 
        userId = e.target.value;
        console.log(userId);
        console.log(e.target.value);
        API.getUser(e.target.value)
        .then(res => {
           console.log(res.data);
           window.location.pathname = `/profile/${userId}`;          
        })
        .catch(err => console.log(err))
   }
    return (

                <div>
                        
                {props.data.map(user =>(
                        //conditional statement to exclude the logged in user from the search results. 
                        user._id !== sub ? (
                        <Button className="smCard">
                        <Card className="smContent" >
                                <div className="img-container justify-content-center" >
                                <img src={ user.photourl } className="circle" alt={user.firstname} />
                                </div>
                                <div>
                                <h4 className="mt-2"> {user.firstname} {user.lastname}</h4>
                                <p>{user.city}, {user.state}</p>
                                <div className="setStar">
                                {[...Array(5)].map((star) => {
                                        return ( 
                                        <FaStar />
                                        );
                                })}
                                </div>

                                <Card className="border-0">
                                        <Card.Body className="skillSet card-deck mt-3"> 
                                        {user.skills.map(skill => (
                                                <span>{skill}</span> 
                                        ))}  
                                        </Card.Body>
                                        <Button value={user._id} onClick = {handleButtonClick}>Barter</Button>
                                </Card>

                                </div>
                        </Card> 
                </Button >
                        ) : null
                ))}
                
     
                </div>
    )
}

export default BrowseResults;