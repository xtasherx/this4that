import React from 'react';

import Row from 'react-bootstrap/Row';

// icons
import { FaComments, FaDollarSign, FaPenSquare } from "react-icons/fa";

import API from "../utils/API";

export default function Footer () {
    return(
        <footer className="container-fluid text-center main-footer">
            <Row className="d-inline-flex">
                
                {/* Footer Nav Icons */}
                <a className="mr-5" href="https://google.com/">
                <span> < FaComments size={25} /> </span>
                <p>message</p>
                </a>

                <a className="mr-5" href="https://google.com/">
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