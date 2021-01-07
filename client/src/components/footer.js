
import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import {Button, Modal, Card, Form } from 'react-bootstrap';
import API from '../utils/API';
import io from 'socket.io-client'


// icons
import { FaComments, FaDollarSign, FaPenSquare } from "react-icons/fa";



export default function Footer (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    
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
                    {/* Footer Nav Icons */}
                
                <Button onClick={handleOpen} >Message</Button>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header>Chat Box</Modal.Header>
                    <Modal.Body>  
                        <Card>
                            {messages.map((message, index) => {
                            if (message.id === yourID) {
                                return (
                                <Row className ="d-inline-flex" key={index}>
                                    <Form.Group>
                                        <Form.Control size='lg' type='text' placeholder='Normal Text'>
                                        {message.body}
                                         </Form.Control>
                                    </Form.Group>
                                </Row>
                                )
                            }
                            return (
                                <Row key={index}>
                                    <p>{message.body}</p>
                                </Row>
                            )
                            })}
                        </Card>
                        <Form onSubmit={sendMessage}>
                            <Form.Text value={message} onChange={handleChange} placeholder="Say something..." />
                            <Button>Send</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>
                            Close Chat
                        </Button>
                    </Modal.Footer>
                    </Modal>    


                <a className="mr-5" href={ `https://paypal.com/paypalme/${props.paypaluser}`} target="_blank">
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

