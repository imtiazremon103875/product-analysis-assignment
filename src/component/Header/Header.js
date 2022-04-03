import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-tools'>
            <Link to="/home">Home</Link>
            <Link to='/reviews'>Review</Link>
            <Link to='/dashboards'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;