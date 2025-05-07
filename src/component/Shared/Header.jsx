import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            {/* ============ Nav Container ========== */}
            <nav className='flex flex-col md:flex-row items-center justify-between py-8'>
                {/* ========== Brand ====== */}
                <Link to='/'>
                <h3 className='text-lg md:text-2xl font-semibold text-blue-500 hover:text-amber-500'>JWT</h3>
                </Link>
                {/* ============ Menu items ====== */}
                <ul className='mx-auto flex gap-x-8'>
                   <NavLink className={({isActive})=> `hover:text-amber-500 ${isActive?'text-fuchsia-700 underline' :'text-blue-500'}` } to='/'>Home</NavLink>
                   <NavLink className={({isActive})=> `hover:text-amber-500 ${isActive?'text-fuchsia-700 underline' :'text-blue-500'}` } to='/about'>About</NavLink>
                   <NavLink className={({isActive})=> `hover:text-amber-500 ${isActive?'text-fuchsia-700 underline' :'text-blue-500'}` } to='/users'>Users</NavLink>
                   <NavLink className={({isActive})=> `hover:text-amber-500 ${isActive?'text-fuchsia-700 underline' :'text-blue-500'}` } to='/feedback'>Feedback</NavLink> 
                </ul>
                 {/* ========= Buttons ======== */}
                <div className='flex flex-col md:flex-row gap-x-5'>
                <NavLink to='/register'><button className='text-white text-sm font-semibold rounded-lg cursor-pointer px-4 py-2 bg-blue-600 border border-blue-600 
               hover:bg-amber-500 hover:border-amber-500 shadow-md 
               transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400'>Register</button></NavLink>
                   
                <NavLink to='/login'> <button className='text-blue-500 hover:text-white font-semibold rounded-lg cursor-pointer px-7 py-2 text-sm border border-blue-600 
               hover:bg-amber-500 hover:border-amber-500 shadow-md 
               transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400'>Login</button></NavLink>
                 </div>
            </nav>
        </div>
    );
};

export default Header;