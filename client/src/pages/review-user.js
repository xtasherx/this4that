import React, { useState } from "react";
import { Redirect} from 'react-router';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

//Auth and Db 
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

// Components
import NavBar from '../components/nav-bar';
import StarRating from '../components/user-rating';


export default function ReviewUser () {

        // pulls in user info returned from Auth0 to pass to db 
        const { user } = useAuth0();
        const { name, sub} = user;
        const [toProfile,setToProfile] = useState(false);

        //user info typed into form to pass to db
        const [formObject, setFormObject] = useState({})
        // console.log(useAuth0());
        const profileRedirect = () => {
                setToProfile(true);       
        }
        // Updates the user in the database with form data. 
        // routes back to profile.js
        function handleFormSubmit(event) {   
                event.preventDefault();  
                API.updateUser(sub,{
                review: formObject.userreview,
                star: formObject.starrating
                // traveldist: formObject.traveldist,
                // paypaluser: formObject.paypaluser,
                // phone: formObject.phone
                })
                .then( profileRedirect )
                .catch(err => console.log(err));    
        };

          // Handles updating component state when the user types into the input field
        function handleInputChange(event) {
                const { name, value } = event.target;
                setFormObject({...formObject, [name]: value})
        };
        return(

                // path needs to be changed to /profile/:id once you figure that out 
                <>
                {toProfile ? <Redirect to ="/profile" /> : null}
                <NavBar />
                <div className="submitReview">
                        <Container className="pt-5">
                                <Form className="edit-form mx-auto">

                                <Form.Group controlId="username">
                                        <h4>{ name }</h4>
                                </Form.Group>
                                
                                <Form.Group controlId="userreview">
                                        <Form.Label>Submit Your Review!</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Tell us a little about you..." onChange={handleInputChange}/>
                                </Form.Group>
                                                                
                                <Form.Group controlId="starrating" className="mb-3">
                                        <StarRating />
                                </Form.Group>

                                <Button 
                                variant="primary" 
                                type="submit" 
                                className="mt-3" 
                                onClick={handleFormSubmit} 
                                >
                                Submit
                                </Button>
                                </Form>
                        </Container>
                </div>
                </>
                )
}