import React, { useState } from 'react';
import "./Header.css";
import amazonlogo from "./image/amazonLOGO.png";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';
import CartPopup from './CartPopup';

const Header = () => {
  const { productState, filterDispatch } = useDataLayerValue();
  const { carts } = productState;
  const [openCart, setOpenCart] = useState(false);

  const searchData = (e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
      filterDispatch({
        type: 'FILTER_BY_SEARCH',
        payload: e.target.value
      })
    }
  }
  return (
    <>
      <div className='header'>
        <div className='header__left'>
          <img src={amazonlogo} />
        </div>
        <div className='header__center'>
          <input placeholder='Search item' onKeyUpCapture={searchData} />
          <BsSearch />
        </div>

        <div className='header__right' onClick={() => setOpenCart(!openCart)}>
          <AiOutlineShoppingCart />
          <span>{carts.length}</span>

        </div>
      </div>
      {openCart && <CartPopup onClick={() => setOpenCart(!openCart)} />}
    </>
  )
}

export default Header
