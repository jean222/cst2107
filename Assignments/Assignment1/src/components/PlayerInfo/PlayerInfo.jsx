/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PlayerCard from "../PlayerCard/PlayerCard";
import './PlayerInfo.css';

export default function PlayerInfo({ info }) {
  return (
    <div className="playerinfo-container">
        {
            info.map((playerInfo) => {
                return <PlayerCard info={playerInfo} />
            })
        }
    </div>
  )
}
