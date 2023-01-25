import React, { useState } from 'react';
import "./SideBar.css";
import Rating from "./Ratings";
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';

const Sidbar = () => {
  const [rating, setRating] = useState(0);
  const { filterState, filterDispatch } = useDataLayerValue();
  const { sort, byStock, fastdevelivery, byRating, searchQuery } = filterState;

  return (
    <div className='sideBar'>
      <div className='sideBar__items'>
        <input type="radio" name='sortFilter'
          checked={sort === "desc" ? true : false}

          onChange={(e) => {
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "desc"

            })

          }} />
        <h5>Ascending Order</h5>
      </div>
      <div className='sideBar__items'>
        <input type="radio" value={"asc"} name='sortFilter'
          checked={sort === "asc" ? true : false}
          onChange={(e) => {
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "asc"

            })

          }} />
        <h5>Decending Order</h5>
      </div>
      <div className='sideBar__items'>
        <input type="checkbox" name='sortFilter'
         checked= {fastdevelivery? true: false}
        onChange={() => filterDispatch({
          type: 'FILTER_BY_Delivery'
        })} />
        <h5>Fast Delivery</h5>
      </div>
      <div className='sideBar__items'>
        <input type="checkbox" name='sortFilter'
        checked = {byStock ? true: false}
        onChange={() => filterDispatch({
          type: 'FILTER_BY_STOCK'
        })} />
        <h5>Include Out of Stock</h5>
      </div>
      <Rating rating={byRating} onClick={(iw) => {
        setRating(iw + 1);
        filterDispatch({
          type: 'FILTER_BY_RATING',
          payload: iw + 1
        })
      }} />
      <button className='btn__filter' onClick={() => filterDispatch({
        type: 'CLEAR_FILTER',

      })}> Clear Filter</button>
    </div>
  )
}

export default Sidbar
