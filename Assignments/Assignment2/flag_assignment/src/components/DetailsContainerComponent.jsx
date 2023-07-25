// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import FlagDetailPage from '../pages/FlagDetailPage';
// import DetailCardComponent from './DetailCardComponent';

// export default function DetailsContainerComponent() {

//   const { country } = useParams();
//   const [flagInfo, setFlagInfo] = useState({})

//   useEffect(() => {
//     getFlagByName
//   }, [country])

//   const getFlagByName = async () => {
//     const info = await fetch(`https://restcountries.com/v3.1/all/${country}`);
//     const convertedJSONData = await info.json();
//     setFlagInfo(convertedJSONData);
//   }



//   return (
//     <div>
//       {
//         <DetailCardComponent info={flagInfo} />
//       }
//     </div>
//   )
// }

import React from 'react'

export default function DetailsContainerComponent() {
  return (
    <div>DetailsContainerComponent</div>
  )
}
