import React, { useEffect, useState } from 'react'
import HufflepuffContext from '../../context/HufflepuffContext'
import HuffProfileList from '../../components/HufflepuffProfile/HuffProfileList';

export default function Hufflepuff() {

  const[hufflepuffData, setHufflepuffData] = useState([]);

  useEffect(() => {
    getHufflepuffHouse();
  }, [])

  const getHufflepuffHouse = async () => {
    const huffHouseData = await fetch(`https://hp-api.onrender.com/api/characters/house/hufflepuff`);
    const huffHouseJSONData = await huffHouseData.json();
    //console.log(huffHouseJSONData)
    setHufflepuffData(huffHouseJSONData);
  }

  return (
    // <div>Hufflepuff</div>
    <HufflepuffContext.Provider value={hufflepuffData}>
      <HuffProfileList />
    </HufflepuffContext.Provider>
  )
}
