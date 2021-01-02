import React, { useState, useEffect} from 'react';

// Import Components
import NavBar from '../components/nav-bar';
import Search from '../components/nav-search';

//Bootstrap
import Container from 'react-bootstrap/Container';
import API from '../utils/API';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// icons
import { FaStar } from "react-icons/fa";

// Authentication
import { useAuth0 } from "@auth0/auth0-react";

export default function Browse () {
        const { user } = useAuth0();
        const { name, picture } = user; 
        const [userData, setUserData] = useState([]);
       
        
        useEffect(() => {
                API.getUsers()
                .then(res => {
                  setUserData(res.data);
                  console.log(userData);
                })
                .catch(err => console.log(err))
        },[])

        console.log(userData);
   
        return (
                <>
                <NavBar />
                <div className="proEdit">
                <Container className="pt-4">
                        <div className ="searchBar my-3" >
                                <Search />
                        </div>
                        
                {userData.map(user =>(
                        <Button className="smCard">
                        <Card className="smContent" >
                                <div className="img-container justify-content-center" >
                                <img src={ picture } className="circle" alt={name} />
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
                                </Card>

                                </div>
                        </Card> 
                </Button>
                ))}
                
                </Container>
                </div>
                </>
        );
};