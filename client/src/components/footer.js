
import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import {Button, Modal, Card, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import API from '../utils/API';
import io from 'socket.io-client';
import Review from "../components/reviews";

// Booststrap
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

// icons
import { FaComments, FaDollarSign, FaPenSquare } from "react-icons/fa";

// Socket.io 
export default function Footer (props) {
    console.log(props.id)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const [reviewShow, setReviewShow] = useState(false);
    const handleReviewClose = () => setReviewShow(false);
    const handleReviewOpen = () => setReviewShow(true);

    
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    
    const socketRef = useRef();
    
    useEffect(() => {
        socketRef.current = io.connect('/');
    
        socketRef.current.on("your id", id => {
        setYourID(id);
        })
    
        socketRef.current.on("message", (message) => {
        console.log("here");
        receivedMessage(message);
        })
    }, []);
    
    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }
    
    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
        body: message,
        id: yourID,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
        
    }
    
    function handleChange(e) {
        setMessage(e.target.value);
    }


    

    return(
        <footer className="container-fluid text-center main-footer">
            <Row className="d-inline-flex">
                
                {/* Message Feature */}
                <Button type="button" className="btn btn-link mr-5" onClick={handleOpen} >
                <span> < FaComments size={25} /> </span>
                <p>message</p>
                </Button>

                {/* Messenger Modal */}
                    <Modal show={show} onHide={handleClose} >
                    
                        {/* Header Content */}
                        <Modal.Header>
                            <h3>Chat Box</h3>
                            <Button className="closeBtn" onClick={handleClose}>
                                <span>&#10006;</span>
                            </Button>
                        </Modal.Header>
                        
                        <Modal.Body>  
                            <div className="messages">
                                {messages.map((message, index) => { 
                                if (message.id === yourID) { 
                                    return (
                                        <p key={index}> {message.body}</p>
                                    )
                                }
                                return (
                                    <p  key={index}>{message.body}</p>
                                )
                                })}
                            </div>  

                            <Form onSubmit={sendMessage}>
                                <Form.Control value={message} onChange={handleChange} as="textarea" rows={3} placeholder="Say something..." />
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className="btn-primary justify-content-end" onClick={sendMessage}>Send</Button>
                        </Modal.Footer>
                    </Modal>    


                <a className="mr-5" href={ `https://paypal.com/paypalme/${props.paypaluser}`} target="_blank" rel="noreferrer">
                <span> < FaDollarSign size={25} /> </span>
                <p>pay</p>
                </a>  
                
                {/* potentially here if reviewShow etc to toggle Button */}

                <Button onClick={handleReviewOpen}>
                <span> < FaPenSquare size={25} /> </span>
                <p>reviews</p>
                </Button>  

                <a href="./review-user">
                <span> < FaPenSquare size={25} /> </span>
                <p>review</p>
                </a>     
            </Row>
           {reviewShow ? <Review/> : null }
        </footer>
    )
};

