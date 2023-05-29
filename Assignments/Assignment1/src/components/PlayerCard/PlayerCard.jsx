/* eslint-disable react/prop-types */
import './PlayerCard.css';

export default function PlayerCard({ info }) {
  return (
    // <div className='playercard-container'>
    <div className='playercard-container'>

        <div className='playercard-header'>
            <img src={info.avatar} width={'200px'} alt=''/>
        </div>

        <div className='playercard-body'>

            <div className='player-position-number'>
                <em>{info.number}</em>
            </div>

            <div className='player-name'>
                <span>{info.first_name} {info.last_name}</span>
            </div>

            <div>
            <span>{info.position}</span>
            </div>

            <div className='player-email'>
            <span>{info.email}</span>
            </div>

            
        </div>
    </div>
  )
}
