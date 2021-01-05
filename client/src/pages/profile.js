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

//Db 
import API from "../utils/API";

// icons
import { FaPen } from "react-icons/fa";


export default function User () {
    const {id} = useParams();
    const [userData, setUserData] = useState({});
    const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        API.getUser(id)
        .then(res => {
            setUserData(res.data);
            setSkillList(res.data.skills);
            console.log(userData);
        })
    },[])

        return(
                <>
                <NavBar />
                <div className="userInfo">
                <Container>
                        <div className="profileCard mb-5">
                                <Row className="justify-content-end mr-4">
                                        <NavLink
                                        to="/profile-edit"
                                        exact
                                        className="edit"
                                        activeClassName="router-link-exact-active"
                                        >
                                        < FaPen size={15} />&ensp;Edit Profile
                                        </NavLink>
                                </Row>
                                <Row>
                                        <Col md="7">
                                    <ProfileCard city={userData.city} state={userData.state} firstName={userData.firstname} lastName={userData.lastname} picture={userData.photourl}/>
                                        </Col>
                                        <Col>
                                        <Card className="border-0">

                                                <Card.Body className="skillSet card-deck mt-3">
                                                {skillList.map((skill,i) => (
                                                        <span key={i}>{skill}</span>
                                                ))}

                                                </Card.Body>

                                                <Card.Text className="mt-4">
                                                        <h5>Bio</h5>
                                                        <p>
                                                        {userData.bio}
                                                        </p>
                                                </Card.Text>
                                        </Card>

                                        </Col>
                                </Row>
                                <Row>
                                        <Footer />    
                                </Row>
                        </div>

                        <Row className="profRev">
                                <h4 className="mt-3 pb-2 mx-auto">Reviews</h4>
                                <ReviewSlider />
                        </Row>
                </Container>
                </div>
                </>
        )
        
}