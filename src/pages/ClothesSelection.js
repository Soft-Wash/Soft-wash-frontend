import React from 'react'
// import EmixNav from '../components/EmixNav'
import BookingBanner from '../components/BookingBanner'
import ClothesSelectCart from '../components/ClothesSelectionPage/ClothesSelectCart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';

function ClothesSelection() {
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className='container position_re'>

        <BookingBanner/>
        <ClothesSelectCart/>
        <ToastContainer position="top-center" />
        
       
        
    </div>
  )
}

export default ClothesSelection