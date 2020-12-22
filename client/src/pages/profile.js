import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

//compoenents
import ReviewCard from '../components/review-card';


export default function Profile () {
        return(
                <Container className="my-5">

                <Row>
                        <Col md="auto" lg={6}>
                                <Card style={{ width: '18rem' }}>
                                        <div className ="circle"></div>
                                        <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                </Card>
                        </Col>

                        <Col md="auto" lg={6}>

                        <h5 className="mb-4">Reviews </h5>
                                <ReviewCard className="mb-2" />
                                <ReviewCard className="mb-2" />
                                <ReviewCard className="mb-2" />

                        </Col>
                </Row>

        </Container>
        )
}