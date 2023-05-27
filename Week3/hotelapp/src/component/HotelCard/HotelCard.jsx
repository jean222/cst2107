/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//import React from 'react'
import './HotelCard.css';

export default function HotelCard({ data }) {
  return (
    <div className='card-container'>
        <div className='card-header'>
            <img src={data.image} width={'200px'} alt=''/>
        </div>

        <div className='card-body'>
            <img width="20px" src='https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png'></img>
            <span>{data.rating}</span>

            <img src='https://cdn-icons-png.flaticon.com/512/25/25297.png' width={'20px'}></img>
            <span>{data.like}</span>

            <span> {data.location}</span>
            
            <div>
            <p>Price: $ {data.price}</p>
            </div>
        </div>
        
    </div>
  )
}
