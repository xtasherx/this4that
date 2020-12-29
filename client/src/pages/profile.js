import React from "react";
import {NavLink} from "react-router-dom";

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

// icons
import { FaPen } from "react-icons/fa";

export default function Profile () {
        return(
                <>
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
                                        <ProfileCard />
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