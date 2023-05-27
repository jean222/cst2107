//import React from 'react'
import './Banner.css';

export default function Banner() {
  return (
    <section className='banner-container'>
        <img style={{width: '100%'}} src='https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80'></img>

        <div className='banner-content'>
            <h1 className='banner-title'>Book your hotel today!</h1>
            <p className='banner-subtitle'>You can choose form a wide variety of HOTELS!</p>
        </div>
    </section>
  )
}
