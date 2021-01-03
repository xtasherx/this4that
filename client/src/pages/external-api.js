<<<<<<< HEAD

=======
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ExternalApi = (props) => {
  const [user, setUser] = useState({})

  // When this component mounts, grab the user with the _id of props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getUser(id)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  // }, [])
})

  return (

    <Container>
      <Card>
      <h1>Fluid jumbotron</h1>
            <p>
            {user}
            </p>
      </Card>


    </Container>

    );
};

export default ExternalApi;
>>>>>>> ash
