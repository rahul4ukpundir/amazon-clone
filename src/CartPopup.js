import React from 'react';
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';
import "./CartPopup.css";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import { Link } from 'react-router-dom';
const CartPopup = ({ onClick }) => {
    const { productState: {carts},dispatch } = useDataLayerValue();
    return (
        <div className='cartPopup'>
            <span className='cancebutton' onClick={() => onClick()}><MdCancel /></span>
            {
                carts?.length > 0 ?
                    <div className='cart__item__details'>
                        {
                            carts.map((cart, index) => {
                                return (
                                    <div className='cart__item' key={index}>
                                        <img src={cart.imageUrl} />
                                        <div className='cart__item_details'>
                                            <h5>{cart.name}</h5>
                                            <h6>$ {cart.price}</h6>
                                        </div>

                                        <span onClick={() => dispatch(
                                            {
                                                type: "REMOVE_FROM_CART",
                                                payload: {
                                                    id: cart.id
                                                }
                                            }
                                        )}>
                                            <AiFillDelete />
                                        </span>


                                    </div>
                                )
                            })
                        }
                        <Link to="checkout">
                            <button className='btn-goToCart'>Go to Cart</button>
                        </Link>

                    </div>

                    :
                    <div className='cart__notitem'>
                        <span>No item in the cart</span>
                    </div>
            }
        </div>
    )
}

export default CartPopup
