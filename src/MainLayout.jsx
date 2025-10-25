import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './SharedElements/Navbar';
import Footer from './SharedElements/Footer';

const MainLayout = () => {
  return (
    <div className='  '>
             
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
    </div>
  );
}

export default MainLayout;
