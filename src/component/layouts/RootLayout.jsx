import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen mx-auto px-18'>
            <Header/>
            <main className='flex-grow'>
            <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;