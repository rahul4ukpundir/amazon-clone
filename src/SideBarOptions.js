import React from 'react';
import "./SideBarOptions.css";

const SideBarOptions = ({title}) => {
  return (
    <div className='sideBarOption'>
      <input type ="radio" radioGroup='filter' />
       <h5>{title}</h5>
    </div>
  )
}

export default SideBarOptions
