import './App.css'
import Header from './component/Header/Header'
import Banner from './component/Banner/Banner'
import HotelInfo from './component/HotelInfo/HotelInfo'
import { useState } from 'react'
import data from './constant.json';

function App() {

  const [hotelData, setHotelData] = useState(data);

  return (
    <div className='App'>
      <Header />
      <Banner />
      <HotelInfo data={hotelData} />
    </div>
  )
}

export default App
