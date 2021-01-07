import React, { useState, useEffect} from 'react';
// Import Components
import NavBar from '../components/nav-bar';
import Search from '../components/nav-search';

//Bootstrap
import Container from 'react-bootstrap/Container';
import API from '../utils/API';


import BrowseResults from '../components/browseresults';

export default function Browse () {
        const [userData, setUserData] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [data,setData] = useState([]);

        useEffect(() => {
                API.getUsers()
                .then(res => {
                  setUserData(res.data); 
                             
                })
                .catch(err => console.log(err))
        },[])

        useEffect(() => {
                userData.forEach(user => {
                        if (user.skills.includes(searchTerm)) {
                                console.log(user);
                                setData([user]);
                        } 
                })
               
                // const results = userData.filter(user => 
                //    user.skills.includes(searchTerm)  );   
                // console.log(results);
                // setData(results);
                
              }, [searchTerm,userData]);
        

        // looks through each user returned from db and runs a for each on their skills --- returns only results with searched criteria 
        const handleChange = e => {
                setSearchTerm(e.target.value);
                console.log(searchTerm);
        }


        return (
                <>
                <NavBar />
                <div className="proEdit">
                <Container className="pt-4">
                        <div className ="searchBar my-3" 
                         
                        >
                                <Search        
                                value={searchTerm}
                                onChange={handleChange}/>
                        </div>
                <BrowseResults data={data}/>
                </Container>
                </div>
                </>
        );
};