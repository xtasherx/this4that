import React, { useState } from 'react';

// Import Components
import NavBar from '../components/nav-bar';
import Search from '../components/nav-search';
import SmUser from '../components/small-user';

//Bootstrap
import Container from 'react-bootstrap/Container';
import API from '../utils/API';


export default function Browse () {
        const [users, setUsers] = useState({})
        API.getUsers()
        .then(res => {
                setUsers(res.data);
                console.log(users);
        })
        return (
                <>
                <NavBar />
                <div className="proEdit">
                <Container className="pt-4">
                        <div className ="searchBar my-3" >
                                <Search />
                        </div>
                        <SmUser city={users[0].city}/>
                </Container>
                </div>
                </>
        );
};