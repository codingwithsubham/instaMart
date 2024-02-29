import React from 'react'
import { useLocation } from 'react-router-dom';

const ShopByCategory = () => {
const { state } = useLocation();
  return (
    <div className='shp-by-cat'>
        <h1>{state?.category?.catName}</h1>
    </div>
  )
}

export default ShopByCategory