import React from 'react'
import SingleProduct from './SingleProduct';
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';
import { useEffect } from 'react';
import { products as mockProduct } from './MockData/product';
import "./Products.css";

const Products = () => {
    const [{ products }, dispatch] = useDataLayerValue();
    console.log("product", products)
    useEffect(() => {
        dispatch({
            type: "GET_ALLPRODUCT",
            products: mockProduct
        })
    }, [])

    return (
        <div className='products'>
            {
                mockProduct && mockProduct.map(product =>
                    <SingleProduct id={product.id} name={product.name} price={product.price} imageUrl={product.image}
                        ratings={product.ratings} inStock={product.inStock} />
                )
            }

        </div>
    )
}

export default Products
