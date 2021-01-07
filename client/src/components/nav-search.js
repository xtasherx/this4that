import React from "react";

// Bootstrap 
// import Form from 'react-bootstrap/Form';

export default function Search (props) {
    return (
        <div className="mr-3">
            <input 
                className ="input-small mb-1 search"
                type="search" 
                value={props.value}
                placeholder="Search..."
                onChange={props.onChange}
                >
            </input>
        </div>
    )
};
