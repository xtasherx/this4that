import React from 'react';

import Row from 'react-bootstrap/Row';

// icons
import { FaRegComments, FaRegCompass } from "react-icons/fa";

export default function Footer () {
    return(
        <footer className="container-fluid text-center main-footer">
            <Row className="d-inline-flex">
                    {/* Footer Nav Icons */}
                
                <a className="mr-3" href="https://google.com/">
                <span> < FaRegComments /> </span>
                <p>home</p>
                </a>

                <a className="mr-3" href="https://google.com/">
                <span> < FaRegCompass /> </span>
                <p>browse</p>
                </a>  
                
                <a className="mr-3" href="https://google.com/">
                <span> < FaRegCompass /> </span>
                <p>reviews</p>
                </a>     
            </Row>
        </footer>
    )
};