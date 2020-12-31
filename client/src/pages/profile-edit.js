import React, { useState } from "react";
import { Redirect} from 'react-router';
//Bootstrap
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

//Auth and Db 
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

// Components
import NavBar from '../components/nav-bar';
import InputSkill from '../components/input-skills'

export default function ProfileEdit () {
        // pulls in user info returned from Auth0 to pass to db 
        const { user } = useAuth0();
        const { given_name, family_name, email, picture, name, sub} = user;
        const [toProfile,setToProfile] = useState(false);

        //user info typed into form to pass to db
        const [formObject, setFormObject] = useState({})
        console.log(useAuth0());
        const profileRedirect = () => {
                setToProfile(true);       
        }
        // Updates the user in the database with form data. 
        // routes back to profile.js
        function handleFormSubmit(event) {   
                event.preventDefault();  
                API.updateUser(sub,{
                city: formObject.city,
                state: formObject.state,
                traveldist: formObject.traveldist,
                paypaluser: formObject.paypaluser,
                phone: formObject.phone
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
                <div className="proEdit">
                        <Container className="pt-5">
                                <Form className="edit-form mx-auto">
                                <img src= { picture } alt={name} className="rounded-circle img-fluid mb-2" />
                                <h3>{ name }</h3>
                                <h6 className="mb-5">{email}</h6>
                                <Form.Row>
                                        <div className="mb-3">
                                        <Form.File id="formcheck-api-regular">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.File.Input />
                                        </Form.File>
                                        </div>
                                </Form.Row>
                                {/* <Form.Row>
                                        <Form.Group as={Col} controlId="formEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder={email} disabled/>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder={name} disabled/>
                                        </Form.Group>
                                </Form.Row> */}
                                <Form.Row>
                                        <Form.Group as={Col} controlId="formEmail">
                                        <Form.Label>PayPal UserName</Form.Label>
                                        <Form.Control type="text" placeholder="User Name" name="paypaluser" onChange={handleInputChange}/>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formPhoneNumber">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="phone" placeholder="Phone Number" name="phone" onChange={handleInputChange}/>
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name="city" onChange={handleInputChange} placeholder="City"/ >
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..." name="state" onChange={handleInputChange}>
                                                <option>Choose...</option>
                                                <option value="">N/A</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DC">District of Columbia</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="IA">Iowa</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MD">Maryland</option>
                                                <option value="ME">Maine</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MT">Montana</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NY">New York</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VA">Virginia</option>
                                                <option value="VT">Vermont</option>
                                                <option value="WA">Washington</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WY">Wyoming</option>
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formTravelDist">
                                        <Form.Label>Travel Distance</Form.Label>
                                        <Form.Control type="text" placeholder="Distance" name="traveldist" onChange={handleInputChange} />
                                        </Form.Group>
                                </Form.Row>
                                        <Form.Label>Barter Skills</Form.Label>
                                        <InputSkill />
                                <Button 
                                variant="primary" 
                                type="submit" 
                                className="mt-5" 
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