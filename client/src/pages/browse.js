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
        const { name } = user; 
        const [userData, setUserData] = useState([]);
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
        
        useEffect(() => {
                API.getUsers()
                .then(res => {
                        setUserData(res.data);
                        console.log(userData);
                })
                .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        return (
                <>
                <NavBar />
                <div className="proEdit">
                <Container className="pt-4">
                        <div className ="searchBar my-3" >
                                <Search />
                        </div>

                <div className="smCard d-flex flex-wrap justify-content-center p-0">   
                        {userData.map(user =>(
                
                        <Card className="align-items-center col-xs-9 col-sm-9 col-md-5 col-md-5 col-lg-3 col-xl-3 p-0">
                                <div className="img-container pt-4 ">
                                        <img src={ user.photourl } className="circle" alt={name} />
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
                                                <Card.Body className="skillSet d-flex flex-wrap"> 
                                                {user.skills.map(skill => (
                                                        <span className="mb-2">{skill}</span> 
                                                ))}  
                                                </Card.Body>
                                        </div>
                                </div>
                                <Button className="viewPro" value={user._id} onClick = {handleButtonClick}>Barter</Button>
                        </Card> 
                
                ))}
                </div>
                
                </Container>
                </div>
                </>
        );
};