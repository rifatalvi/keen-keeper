import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componet/sheard/Navbar';
import Footer from '../componet/sheard/Footer';

const Rootlayout = () => {
    return (
      <div className="flex flex-col min-h-screen overflow-x-hidden">
  <Navbar />
  
 
  <main className="flex-1">
    <Outlet />
  </main>

  <Footer />
</div>
    );
};

export default Rootlayout;