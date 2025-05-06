import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-6'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;