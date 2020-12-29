import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

// Components
import NavBar from '../components/nav-bar';
import InputSkill from '../components/input-skills'

// authentication
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfileEdit () {
        
        const { user } = useAuth0();
        const { picture, name, email } = user; 
        
        return(
        <>
        <NavBar />
        <div className="proEdit">
                <Container className="pt-5">
                        
                        <Form className="edit-form mx-auto">
                        
                        <img src= { picture } alt={name} className="rounded-circle img-fluid mb-2" />
                        <h2>{ name }</h2>
                        <h6 className="mb-5">{email}</h6>

                        <Form.Row>
                                <Form.Group as={Col} md="6" controlId="formPhoto">
                                        <div className="mb-3">
                                        <Form.File id="formcheck-api-regular">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.File.Input />
                                        </Form.File>
                                        </div>
                                </Form.Group>
                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md="6" controlId="formEmail">
                                <Form.Label>PayPal UserName</Form.Label>
                                <Form.Control type="text" placeholder="User Name"/>
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="formPhoneNumber">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="phone" placeholder="Phone Number"/>
                                </Form.Group>
                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} md="4" controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City"/>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
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

                                <Form.Group as={Col} md="4" controlId="formTravelDist">
                                <Form.Label>Travel Distance</Form.Label>
                                <Form.Control type="text" placeholder="Distance"/>
                                </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Tell us a little about you..."/>
                        </Form.Group>

                        
                                <Form.Label>Barter Skills</Form.Label>
                                <InputSkill />


                        <Button variant="btn" type="submit" className="mt-3">
                                Submit
                        </Button>

                </Form>
                </Container>
        </div>
        </>
        )
}