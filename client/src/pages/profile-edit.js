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
        // pulls in user info returned from Auth0 to pass to db 
        const { user } = useAuth0();
        const { given_name, family_name, email} = user;
        const [users, setUsers] = useState([])
        //user info typed into form to pass to db
        const [formObject, setFormObject] = useState({})

        // skeleton for function that sends new profile info to db 
        // need to pass user entered info to this function as well 
        function handleFormSubmit(event) {
                event.preventDefault();
                if (email) {
                API.saveUser({
                firstname: given_name,
                lastname: family_name,
                email: email,
                city: formObject.city,
                state: formObject.state,
                traveldist: formObject.traveldist,
                phone: formObject.phone
                })
                .then(res => someFunctionINeedToWrite())
                .catch(err => console.log(err));
                }
        };

          // Handles updating component state when the user types into the input field
        function handleInputChange(event) {
                const { name, value } = event.target;
                setFormObject({...formObject, [name]: value})
        };
    

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