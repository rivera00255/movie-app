import React from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    return ( 
        <nav className='mobile-nav'>
            <ul>
                <li>
                    <Link to='/movie'>Movies</Link>
                </li>
                <li><a href='#'>TV Shows</a></li>
                <li><a href='#'>search</a></li>
            </ul>
            <ul>
                <li><a href='#'>Sign In</a></li>
                <li><a href='#'>Sign Up</a></li>
            </ul>
        </nav>
     );
}

export default MobileNav;