import React, {useState, useEffect} from "react";

// Boostrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// icons
import { FaStar } from "react-icons/fa";

// Authentication
import { useAuth0 } from "@auth0/auth0-react";


export default function SmUser (props) {
    const { user } = useAuth0();
    const { name, picture } = user; 
    const users = props.users;
    console.log(users);


    return(
<>
          { users.map(user => (
            <Button className="smCard">
            <Card className="smContent" >
                <div className="img-container justify-content-center" >
                    <img src={ picture } className="circle" alt={name} />
                </div>
                <div>
                    <h4 className="mt-2"> {user.firstname} {user.lastname}</h4>
                    <p>{props.city}, {props.state}</p>
                    <div className="setStar">
                    {[...Array(5)].map((star) => {
                        return ( 
                            <FaStar />
                        );
                    })}
                    </div>

                    <Card className="border-0">
                        <Card.Body className="skillSet card-deck mt-3">
                            <span>Skill</span>
                        </Card.Body>
                    </Card>

                </div>
            </Card> 
        </Button>
          ))}

        </>
    );
}