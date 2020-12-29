import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

// Components
import NavBar from '../components/nav-bar';
import InputSkill from '../components/input-skills'

export default function ProfileEdit () {
        return(
        <>
        <NavBar />
        <div className="proEdit">
                <Container className="pt-5">
                        <Form className="edit-form mx-auto">
                        <Form.Row>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>


                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <div className="mb-3">
                        <Form.File id="formcheck-api-regular">
                        <Form.Label>Regular file input</Form.Label>
                        <Form.File.Input />
                        </Form.File>
                        </div>

                        <InputSkill />

                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                        </Form>
                </Container>
        </div>
        </>
        )
}