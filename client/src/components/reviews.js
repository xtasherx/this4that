import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import {useParams} from 'react-router';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//components
import NavBar from "../components/nav-bar";
import ProfileCard from '../components/profile-card'
import ReviewSlider from '../components/review-slider';
import Footer from '../components/footer'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//Db 
import API from "../utils/API";

// icons
import { FaPen } from "react-icons/fa";


// export default function Review (props) {
//    console.log();

//         return(
//                 <Container className = "mt-5">
//                         <div className=" d-flex flex-column px-5 mx-5 rounded">
//                             <div className=" align-items-center justify-content center">
//                                 <div>
//                                     <Form >
//                                         <Form.Group  controlId="exampleForm.ControlTextarea1">
//                                             <Form.Label><h3 style={{"color": "black"}}>How did Natasha Do? </h3></Form.Label>
//                                             <Form.Control as="textarea" rows={3} placeholder="leave your review here"/>
//                                         </Form.Group>
                                    
//                                     </Form>
//                                     <Button 
//                                         variant="primary" 
//                                         type="submit" 
//                                         className="mt-3 mb-5" 
//                                         >
//                                         Submit
//                                     </Button>
//                                 </div>

//                             </div>

//                         </div>

//                 </Container>
                

//                 // </>
//         )
        
// }
/* eslint-disable import/no-anonymous-default-export */
export default[
  {
    id: 1,
    review: "Unidentified vessel travelling at sub warp speed, bearing 235.7. Fluctuations in energy readings from it, Captain. All transporters off. A strange set-up, but I'd say the graviton generator is depolarized."
  },
  {
    id: 2,
    review: "I'm afraid I still don't understand, sir. Now we know what they mean by 'advanced' tactical training. The unexpected is our normal routine. I suggest you drop it, Mr. Data. Damage report!"
  },
  {
    id: 3,
    review: "Damage report! Wait a minute - you've been declared dead. You can't give orders around here. The unexpected is our normal routine. Yes, absolutely, I do indeed concur, wholeheartedly! What? We're not at all alike!"
  },
  {
    id: 4,
    review: "Did you come here for something in particular or just general Riker-bashing? Congratulations - you just destroyed the Enterprise."
  },
  {
    id: 5,
    review: "When has justice ever been as simple as a rule book? I guess it's better to be lucky than good. And blowing into maximum warp speed, you appeared for an instant to be in two places at once. Fate. It protects fools, little children, and ships named Enterprise. Fate protects fools, little children and ships named Enterprise."
  },
  {
    id: 6,
    review: "What's a knock-out like you doing in a computer-generated gin joint like this? Talk about going nowhere fast."
  }
]
