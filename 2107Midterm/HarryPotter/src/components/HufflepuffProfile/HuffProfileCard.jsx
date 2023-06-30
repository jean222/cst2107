import React from 'react'

export default function HuffProfileCard(props) {
    return <div style={{background: "#fff", boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <img width={200} src={props.data.image} />
        <p>{props.data.name}</p>
        <p>{props.data.ancestry}</p>
    </div>
}
