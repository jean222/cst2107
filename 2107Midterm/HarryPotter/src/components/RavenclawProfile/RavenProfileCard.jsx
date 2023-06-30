import React from 'react'

export default function RavenProfileCard(props) {
    return <div className="students-container">
        <img src={props.data.image} />
        <p style={{fontSize:'20px'}}>{props.data.name}</p>
        <p>{props.data.ancestry}</p>
    </div>
}
