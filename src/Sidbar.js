import React, { useState } from 'react';
import "./SideBar.css";
import SideBarOptions from './SideBarOptions';
import Rating from "./Ratings";

const Sidbar = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className='sideBar'>
      <SideBarOptions title ="Ascending Order"/>
      <SideBarOptions title ="Decending Order"/>
      <SideBarOptions title ="Fast Delivery"/>
      <SideBarOptions title ="Include Out of Stock"/>
      <Rating rating={rating} onClick = {(iw) => setRating(iw+1)} />
    </div>
  )
}

export default Sidbar
