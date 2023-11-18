import React from 'react'
// import EmixNav from '../components/EmixNav'
import BookingBanner from '../components/BookingBanner'
import ClothesSelectCart from '../components/ClothesSelectionPage/ClothesSelectCart'


function ClothesSelection() {
  return (
    <div className='container text-align-center'>
        <BookingBanner/>
        <ClothesSelectCart/>
    </div>
  )
}

export default ClothesSelection