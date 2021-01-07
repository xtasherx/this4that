import React from 'react';
import Row from 'react-bootstrap/Row';

// icons
import { FaComments, FaDollarSign, FaPenSquare } from "react-icons/fa";


export default function Footer (props) {

    return(
        <footer className="container-fluid text-center main-footer">
            <Row className="d-inline-flex">
                
                {/* Footer Nav Icons */}
                <a className="mr-5" href="https://google.com/">
                <span> < FaComments size={25} /> </span>
                <p>message</p>
                </a>

<<<<<<< HEAD
                <a className="mr-5" href={ "https://paypal.com/paypalme/"+paypaluser} target="_blank" rel="noreferrer">
=======
                <a className="mr-5" href={ `https://paypal.com/paypalme/${props.paypaluser}`} target="_blank">
>>>>>>> 88a1e8d03ec1dd200e6b6e34eeea7b5b0bb13f7c
                <span> < FaDollarSign size={25} /> </span>
                <p>pay</p>
                </a>  
                
                <a href="./review-user">
                <span> < FaPenSquare size={25} /> </span>
                <p>review</p>
                </a>     
            </Row>
        </footer>
    )
};

