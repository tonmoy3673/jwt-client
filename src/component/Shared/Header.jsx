import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav>
                <h3>JWT</h3>
                <ul>
                   <NavLink to='/'>Home</NavLink>
                   <NavLink to='/'>About</NavLink>
                   <NavLink to='/'>Login</NavLink>
                   <NavLink to='/'>Register</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;