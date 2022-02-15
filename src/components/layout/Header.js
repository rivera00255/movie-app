import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MobileNav from '../ui/MobileNav';

function Header() {

    const [mobileNav, setMobileNav] = useState(false);

    const categories = useSelector(state => state.categoryReducer);
    const categoryName = [
        'Movies', 'TV Shows', 'Search'
    ]
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(location.pathname);
        setCurrentLocation(location.pathname);
    }, [location])
    
    const mobileBtnHandler = () => {
        setMobileNav(!mobileNav)
    }

    return ( 
        <>
        <header>
            <h1 className='logo'>
                <Link to='/'>iMDB</Link>
            </h1>
            <nav className='global-nav'>
                <ul>
                    {
                        categories.map((name, i) => (
                            <li key={name[i]}>
                                <Link to={`/${name}`}>{categoryName[i]}</Link>
                            </li>
                        ))
                    }
                    {/* <li><Link to='/movie'>Movies</Link></li>
                    <li><Link to='/tv'>TV Shows</Link></li>
                    <li><Link to='/search'>search</Link></li> */}
                </ul>
            </nav>
            <nav className='local-nav'>
                <ul>
                    <li><a href='#'>Sign In</a></li>
                    <li><a href='#'>Sign Up</a></li>
                </ul>
            </nav>
            <button className={mobileNav == true ? 'mobile-btn button-active' : 'mobile-btn'} onClick={mobileBtnHandler}>=</button>
            {
                mobileNav == true ? <MobileNav /> : null
            }
        </header>
        </>
     );
}

export default Header;