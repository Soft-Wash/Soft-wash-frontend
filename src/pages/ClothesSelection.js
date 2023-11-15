import React from 'react'
// import EmixNav from '../components/EmixNav'
import BookingBanner from '../components/BookingBanner'
import ClothesSelectCart from '../components/ClothesSelectionPage/ClothesSelectCart'


function ClothesSelection() {
  return (
    <div className='container'>
        <BookingBanner/>
        {/* <SelectedCart/> */}
        <ClothesSelectCart/>
        {/* <div className='mt-5 d-flex justify-content-center gap-3'>
            <button className='btn btn-outline-primary px-5 '>Dry Wash</button>
            <button className='btn btn-info px-5'>Laundry</button>
        </div>
        <div className='GreyBorder mt-5'>

        </div> */}
    </div>
  )
}

export default ClothesSelection