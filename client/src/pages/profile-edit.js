import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//Auth and Db 
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";


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
        <Container className="my-5">
                <Row>
                        <h1>Hello Profile Edit</h1>
                </Row>
        </Container>
        )
}