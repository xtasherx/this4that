import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//compoenents
import ProfileCard from '../components/profile-card'
import Skills from '../components/skills'
import ReviewSlider from '../components/review-slider';


export default function Profile () {
        return(
                <div className="userInfo">
                <Container>
                        <Row className="profileCard mb-5">
                                <Col>
                                <ProfileCard />
                                </Col>
                                <Col>
                                <Skills />
                                </Col>
                        </Row>
                        <h4 className="mt-5">Reviews </h4>
                        <Row>
                                <ReviewSlider />
                        </Row>
                </Container>
                </div>
        )
        
}