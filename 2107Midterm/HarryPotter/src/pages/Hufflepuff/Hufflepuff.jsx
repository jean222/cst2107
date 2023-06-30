import React, { useEffect } from 'react'
import HufflepuffContext from '../../context/HufflepuffContext'
import HuffProfileList from '../../components/HufflepuffProfile/HuffProfileList';

export default function Hufflepuff() {

  

  useEffect(() => {
    getHufflepuffHouse();
  }, [])

  const getHufflepuffHouse = async () => {
    const huffHouseData = await fetch(`https://hp-api.onrender.com/api/characters/house/hufflepuff`);
    const huffHouseJSONData = await huffHouseData.json();
    console.log(huffHouseJSONData)
  }

  return (
    // <div>Hufflepuff</div>
    <HufflepuffContext.Provider value={huff}>
      <HuffProfileList />
    </HufflepuffContext.Provider>
  )
}
