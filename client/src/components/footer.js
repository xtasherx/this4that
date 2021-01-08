
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client'

// Booststrap
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

// icons
import { FaComments, FaDollarSign, FaPenSquare } from "react-icons/fa";

// Socket.io 
export default function Footer (props) {
    // Modal Variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    // Messenger variables
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const container = document.getElementById("msgContainer");
    
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
        const messageObject = {
        body: message,
        id: yourID,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
        container.scrollTop = container.scrollHeight;
    }
    
    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleKeypress(e) {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
        sendMessage();
        e.preventDefault();
        }
    };
    
    return(
        <footer className="container-fluid text-center main-footer pb-3 pt-5">
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
                            <h3>{props.firstName} Chat Box</h3>
                            <Button  className="closeBtn" onClick={handleClose}>
                                <span>&#10006;</span>
                            </Button>
                        </Modal.Header>
                        
                        <Modal.Body>  
                            <div id="msgContainer" className="messages">
                                {messages.map((message, index) => { 
                                if (message.id === yourID) { 
                                    return (
                                        <p className="sentMsg" key={index}> {message.body}</p>
                                    )
                                }
                                return (
                                    <p  key={index}>{message.body}</p>
                                )
                                })}
                            </div>  

                            <Form onKeyDown={handleKeypress} >
                                <Form.Control value={message} as="textarea" rows={3} placeholder="Say something..."  onChange={handleChange} />
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button type="submit" className="btn-primary justify-content-end" onClick={sendMessage}>Send</Button>
                        </Modal.Footer>
                    </Modal>    


                <a className="mr-5" href={ `https://paypal.com/paypalme/${props.paypaluser}`} target="_blank" rel="noreferrer">
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

