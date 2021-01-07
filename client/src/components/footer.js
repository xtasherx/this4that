import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import {Button, Modal} from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import API from '../utils/API';

// icons
import { FaComments, FaDollarSign, FaPenSquare } from "react-icons/fa";


export default function Footer () {
    const {user} = useAuth0();
    const {sub} = user;
    const [paypaluser, setpaypaluser] = useState();

    const getPaypalUser = () => {
        API.getUser(sub)
        .then(res =>
            setpaypaluser(res.data.paypaluser),
            )
            .catch(err => console.log(err));
        };
        //console.log(paypaluser);

    getPaypalUser();
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    
    return(
        <footer className="container-fluid text-center main-footer">
            <Row className="d-inline-flex">
                    {/* Footer Nav Icons */}
                
                <Button onClick={handleOpen} >Message</Button>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header>Chat Box</Modal.Header>
                    <Modal.Body>I am Job.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>
                            Close Chat
                        </Button>
                    </Modal.Footer>
                    </Modal>    


                <a className="mr-5" href={ "https://paypal.com/paypalme/"+paypaluser} target="_blank">
                <span> < FaDollarSign size={25} /> </span>
                <p>pay</p>
                </a>  
                
                <a href="https://google.com/" >
                <span> < FaPenSquare size={25} /> </span>
                <p>reviews</p>
                </a>     
            </Row>
        </footer>
    )
};

