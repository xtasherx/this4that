import React, { useState, useEffect } from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

//compoenents
import ReviewCard from '../components/review-card';
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";


export default function Profile () {
        const { user } = useAuth0();
        const { given_name, family_name, email} = user;
        const [users, setUsers] = useState([]);

        // useEffect(() => {
        //         loadUsers()
        //       }, [])
            
        //       function loadUsers() {
        //         API.getUser(id)
        //           .then(res => 
        //             setUsers(res.data)
        //           )
        //           .catch(err => console.log(err));
        //       };

        return(
                <Container className="my-5">

                <Row>
                        <Col md="auto" lg={6}>
                                <Card style={{ width: '18rem' }}>
                                        <div className ="circle"></div>
                                        <Card.Body>
                                        <Card.Title>{given_name} {family_name}</Card.Title>
                                        <Card.Text>
                                        <p className="lead text-muted">{email}</p>
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