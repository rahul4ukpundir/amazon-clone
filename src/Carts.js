import React, { useState, useEffect } from 'react';
import "./Carts.css";
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';
import Rating from "./Ratings";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Carts = () => {
    const { productState: {carts}, dispatch } = useDataLayerValue();
    const [checkoutItem, setCheckoutItem] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(carts.length===0){
          navigate("/home")
        }
      }, [])

    return (
     <div className='carts'>
        <div className='carts__left__container'>
         {
            carts && carts.map((cart, index) => {
                return(
                    <div className='cart__item'>
                        <img src = {cart.imageUrl} />
                            <h6>{cart.name}</h6>
                            <h6>{cart.price} Rs</h6>
                            <Rating rating={cart.ratings} />
                            <select name="qunatity" id="qunatity" className='quanity_select' value={cart.qty}
                             onChange ={(e)=>dispatch({
                                type: 'ADD_NEW_QUANTITY',
                                payload: {
                                    id: cart.id,
                                    qty: e.target.value
                                }
                             })}
                            >

                                {[...Array(cart.inStock).keys()].map((option)=>(
                                     <option key ={option+1}>{option+1}</option>
                                ))}
                             
                                </select>
                    </div>
                    )
            }
           
            )
         }

        </div>
        <div className='carts__right__container'>
        <div className='carts__header'>
                    <h6>Selected Cart Items</h6>
                </div>
                <div className='carts__body'>
                    <h4>Total Checkout Product : {carts?.length}</h4>
                    <h4>Total : 
                        {
                            carts && carts.reduce((acc, curr) => parseInt(acc) + parseInt(curr.price)* parseInt(curr.qty), 0)  

                        } Rs
                    </h4>
                </div>
                <div className='carts__footer'>
                    <Link to ="/payment">
                    <button className='btn__checkout'>Click for Payment</button>
                    </Link>
                    <Link to ="/amazon-clone/home">
                    <button className='btn__back'>Back</button>
                    </Link>

                </div>
        </div>

     </div>

    )
}

export default Carts
