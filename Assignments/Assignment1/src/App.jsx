import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import PlayerInfo from './components/PlayerInfo/PlayerInfo'
import info from './constant.json';

function App() {

  const [playerInfo, setPlayerInfo] = useState(info);

  return (
    <div>
      <Header />
      
      <PlayerInfo info={playerInfo} />
      
    </div>
  )
}

export default App
