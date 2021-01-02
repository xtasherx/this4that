import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { Redirect} from 'react-router';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import NavBar from "../components/nav-bar";
import ProfileCard from '../components/profile-card'
import Skills from '../components/skills'
import ReviewSlider from '../components/review-slider';
import Footer from '../components/footer'


//Auth and Db 
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

// icons
import { FaPen } from "react-icons/fa";


export default function Profile () {
        const {user} = useAuth0();
        const { email, sub, given_name, family_name} = user;
        const [toProfileEdit,setToProfileEdit] = useState(false);
        const profileEditRedirect = () => {
                console.log("User added to database.")
                setToProfileEdit(true);       
        }
        const [userData, setUserData] = useState({})
        // After component loads this runs to check if the user is in the db if so returns their 
        // info for us to use if not creates a user in db and routes to profile-edit.js
        useEffect(() => {
                API.getUser(sub)
                .then( res => {     
                        if(!res.data){                            
                                API.saveUser({
                                        _id: sub,
                                        firstname: given_name,
                                        lastname: family_name,
                                        email: email
                                        })
                                .then(profileEditRedirect)
                                .catch(err => console.log(err));
                        }else{
                                setUserData(res.data) ;
                        }
                         
                        }
                )
                .catch(err => console.log(err))
              });

        return(
                <>
                {/* the line below allows re-direct to profile-edit  */}
                {toProfileEdit ? <Redirect to ="/profile-edit" /> : null}
                
                <NavBar />
                <div className="userInfo">
                <Container>
                        <div className="profileCard mb-5">
                                <Row className="justify-content-end mr-4">
                                        <NavLink
                                        to="/profile-edit"
                                        exact
                                        className="edit"
                                        activeClassName="router-link-exact-active"
                                        >
                                        < FaPen size={15} />&ensp;Edit Profile
                                        </NavLink>
                                </Row>
                                <Row>
                                        <Col md="7">
                                        <ProfileCard city={userData.city} state={userData.state} bio={userData.bio}/>
                                        </Col>
                                        <Col>
                                        <Skills />
                                        </Col>
                                </Row>
                                <Row>
                                        <Footer />    
                                </Row>
                        </div>

                        <Row className="profRev">
                                <h4 className="mt-3 pb-2 mx-auto">Reviews</h4>
                                <ReviewSlider />
                        </Row>
                </Container>
                </div>
                </>
        )
        
}