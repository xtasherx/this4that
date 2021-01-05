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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        console.log(userData);

        return (
                <>
                <NavBar />
                <div className="proEdit">
                <Container className="pt-4 mx-auto ">
                        <div className ="searchBar my-3" >
                                <Search />
                        </div>
                        
        {userData.map(user =>(
                <div className="smCard">
                        <Card>
                                <div className="img-container">
                                        <img src={ user.image } className="circle" alt={user.firstname} />
                                </div>
                                <div className="smContent">
                                        <h4 className="mt-2"> {user.firstname} {user.lastname}</h4>
                                        <p>{user.city}, {user.state}</p>
                                        <div className="setStar">
                                        {[...Array(5)].map((star) => {
                                                return ( 
                                                <FaStar />
                                                );
                                        })}
                                        </div>
                                        <p className="mt-3"><strong>Distance able to travel:</strong><br /> {user.traveldist} miles</p>

                                        <div className="border-0">
                                                <Card.Body className="skillSet card-deck mt-3"> 
                                                {user.skills.map(skill => (
                                                        <span>{skill}</span> 
                                                ))}  
                                                </Card.Body>
                                        </div>
                                </div>
                                <Button className="viewPro">View Profile</Button>
                        </Card> 
                </div>
                ))}
                
                </Container>
                </div>
                </>
        );
};