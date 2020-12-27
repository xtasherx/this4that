import React from "react";

//Bootstrap Elements
import Card from 'react-bootstrap/Card'

export default function Skills () {
    
    return(
    <>
        <Card className="border-0">
            <Card.Body className="skillSet card-deck">
                <span>Skill</span>
                <span>Long Skill Title</span>
                <span>Really Long Skill Title</span>
                <span>Skill</span>
                <span>Skill</span>
                <span>Long Skill</span>
                <span>Skill</span>
                <span>Really Really Long Skill Title</span>
                <span>Skill</span>
                <span>Long Skill</span>
            </Card.Body>
        </Card>
    </>
    )
}