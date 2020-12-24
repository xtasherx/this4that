import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

//compoenents
import ReviewSlide from "../components/review-slider";


export default function Profile () {
        return(
                <Container className="my-5">

                        <Card>
                                <Row>
                                        <Col xs={12} sm={4} md={4} lg={2}> 
                                                <div className ="circle"></div>
                                        </Col>
                                        <Col xs={12} sm={8} md={8} lg={4}>
                                                <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                </Card.Body>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={4}>
                                                <Card.Body>
                                                <Card.Title>Skillz</Card.Title>
                                                        <Card.Text>
                                                        <span className="skills">Skill 1</span>
                                                        <span className="skills">Skill 1</span>
                                                        <span className="skills">Skill 1</span>
                                                        <span className="skills">Skill 1</span>
                                                        
                                                        </Card.Text>
                                                </Card.Body>
                                        </Col>
                                

                                </Row>

                                <button>Message</button> &emsp; <button>Review</button>
                        </Card>
                        

                <div className="mt-5">
                        <ReviewSlide />  
                </div>

        </Container>
        )
}