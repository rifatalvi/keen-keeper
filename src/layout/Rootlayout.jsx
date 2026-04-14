import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componet/sheard/Navbar';
import Footer from '../componet/sheard/Footer';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;