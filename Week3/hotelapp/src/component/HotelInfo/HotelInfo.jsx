/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import HotelCard from "../HotelCard/HotelCard"
import './HotelInfo.css';

export default function HotelInfo({ data }) {
  return (
    <div className="hotel-card-container">
        {
            data.map((hotelData) => {
                return <HotelCard data={hotelData} />
            })
        }
    </div>
  )
}
