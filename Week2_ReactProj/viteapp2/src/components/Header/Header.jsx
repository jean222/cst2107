// Functional Components 
//import React from "react";
import './Header.css'; // One way of using css

const Header = () => {
    return(
        // Symantic HTML ?  <header></header>, <nav></nav>, <section></section>, <p></p>
        <header className='header-container'>
            <nav>
                <ul  className='nav-container'>
                    <li className='nav-item'>
                        Home
                    </li>

                    <li className='nav-item'>
                        About
                    </li>

                    <li className='nav-item'>
                        Services
                    </li>

                    <li className='nav-item'>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;