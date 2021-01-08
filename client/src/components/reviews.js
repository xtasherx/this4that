import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import {useParams} from 'react-router';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//components
import NavBar from "../components/nav-bar";
import ProfileCard from '../components/profile-card'
import ReviewSlider from '../components/review-slider';
import Footer from '../components/footer'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//Db 
import API from "../utils/API";

// icons
import { FaPen } from "react-icons/fa";


export default function Review (props) {
   console.log();

        return(
                <Container className = "mt-5">
                        <div className=" d-flex flex-column px-5 mx-5 rounded">
                            <div className=" align-items-center justify-content center">
                                <div>
                                    <Form >
                                        <Form.Group  controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><h3 style={{"color": "black"}}>How did Natasha Do? </h3></Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="leave your review here"/>
                                        </Form.Group>
                                    
                                    </Form>
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        className="mt-3 mb-5" 
                                        >
                                        Submit
                                    </Button>
                                </div>

                            </div>

                        </div>

                </Container>
                

                // </>
        )
        
}