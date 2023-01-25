import React from 'react';
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';
import Ratings from './Ratings';
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const btntext = props.inStock > 0 ? "Add to cart" : "Out of stock";
  const { productState: {carts},dispatch } = useDataLayerValue();
  return (
    <div className='singleProduct'>
      <img src={props.imageUrl} />
      <div className='product_sumary'>
        <h4>{props.name}</h4>
        <p>Price: {props.price}</p>
        <p>{props.fastDelivery? "Fast Delivery": ""}</p>
        <p><Ratings rating={props.ratings} /></p>

        {
          carts.some(p => p.id === props.id) ?
            <button className='btn-cart'
             onClick={() => dispatch({
              type: 'REMOVE_FROM_CART',
              payload: {
                id: props.id
              }
            }


            )}>Remove to Cart</button>
            : <button className={`${props.inStock > 0 ? 'btn-cart' : 'btn-cart btn-disable'}`}
             onClick={
              () => dispatch({
                type: 'ADD_TO_CART',
                payload: props
              })

            }>{btntext}</button>
        }

      </div>

    </div>
  )
}

export default SingleProduct
