import React from 'react'; 
import {Link} from 'react-router-dom'; 


const Header = () => {
    return (
        <div className='nav-bar' >
            <div className='store'>THE NOT SO GENERAL STORE</div>
            <div className='nav-buttons'>
                <Link className='nav-button' to='/'>Login</Link>
                <Link className='nav-button' to='/dash'>Store</Link>
                <Link className='nav-button' to='/cart'>Cart</Link>
            </div>
        </div>
    )
}

export default Header; 