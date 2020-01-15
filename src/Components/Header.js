import React from 'react'; 
import {Link} from 'react-router-dom'; 
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);


const Header = () => {
    return (
        <div className='nav-bar' >
            <div className='store'>THE NOT SO GENERAL STORE</div>
            <div className='nav-buttons'>
                <Link className='nav-button' to='/'>Log Out</Link>
                <Link className='nav-button' to='/dash'>Store</Link>
                <Link className='nav-button' to='/cart'>Cart</Link>
                <button icon='bars' className='menu-button'>
                    <FontAwesomeIcon icon='bars' className='hamburger' />
                </button>
            </div>
        </div>
    )
}

export default Header; 