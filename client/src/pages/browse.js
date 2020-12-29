import React from 'react';

// Import Components
import NavBar from '../components/nav-bar';
import Search from '../components/nav-search';
import SmUser from '../components/small-user';

//Bootstrap
import Container from 'react-bootstrap/Container';


export default function Browse () {
        return (
                <>
                <NavBar />
                <div className="proEdit">
                <Container className="pt-4">
                        <div className ="searchBar my-3" >
                                <Search />
                        </div>
                        <SmUser />
                </Container>
                </div>
                </>
        );
};