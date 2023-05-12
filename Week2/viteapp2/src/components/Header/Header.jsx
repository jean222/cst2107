// Functional Components
// import React from 'react';
import './Header.css'; // one way of using css


const Header = () => {
    return (
       // write Symantic HTML !!
       <header className='header-container'>
        <nav>
            <ul>
                <li>
                    Home
                </li>

                <li>
                    About
                </li>

                <li>
                    Services
                </li>

                <li>
                    Contact
                </li>

            </ul>
        </nav>

       </header>
    )
}

export default Header;