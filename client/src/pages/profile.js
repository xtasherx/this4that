import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//compoenents
import UserCard from '../components/user-card'
import ReviewCard from '../components/review-card';


export default function Profile () {
        return(
                <Container className="my-5">

                <Row>
                        <Col md="auto" lg={6}>
                                <UserCard />
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