import React from "react";

// Boostrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Skills from '../components/skills'

// icons
import { FaStar } from "react-icons/fa";

// Authentication
import { useAuth0 } from "@auth0/auth0-react";

// employee info
import portfolio from "../portfolio.json";

export default function SmUser () {
    const { user } = useAuth0();
    const { name, picture } = user; 
    
    return(
<>
        {portfolio.map(e => (
            <Button className="smCard">
            <Card className="smContent" >
                <div className="img-container justify-content-center" >
                    <img src={ picture } className="profCircle" alt={name} />
                </div>
                <div>
                    <h4 className="mt-2">{ name }</h4>
                    <div className="setStar">
                    {[...Array(5)].map((star) => {
                        return ( 
                            <FaStar />
                        );
                    })}
                    </div>

                    <Skills />
                </div>
            </Card> 
        </Button>

        ))}

        </>
    );
}