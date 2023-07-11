import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';

export default function HeaderComponent() {
   

    const headerTitle = () => {
        return <Toolbar>{Flags}</Toolbar>
    };

   

  return (
    <header>
        <AppBar>{headerTitle()}</AppBar>
    </header>
  )
}









// //import React from 'react'
// import './Header.css';

// export default function Header() {
//   return (
//     <header className='header-container'>
//         <img src='https://upload.wikimedia.org/wikipedia/hif/f/ff/Manchester_United_FC_crest.png' width={'60px'} />
//         <div className='header-title'>
//           <p>Manchester United</p>
//         </div>
        
//     </header>
//   )
// }