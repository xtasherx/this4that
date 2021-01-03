import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
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

    return(
        <footer className="container-fluid text-center main-footer">
            <Row className="d-inline-flex">
                
                {/* Footer Nav Icons */}
                <a className="mr-5" href="https://google.com/">
                <span> < FaComments size={25} /> </span>
                <p>message</p>
                </a>

                <a className="mr-5" href={ "https://paypal.com/paypalme/"+paypaluser} target="_blank" rel="noreferrer">
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

