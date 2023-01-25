import React from 'react'
import SingleProduct from './SingleProduct';
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';
import { useEffect } from 'react';
import { products as mockProduct } from './MockData/product';
import "./Products.css";

const Products = () => {
    const { filterState, filterDispatch } = useDataLayerValue();
    const { sort, byStock, fastdevelivery, byRating, searchQuery } = filterState;
    console.log(filterState)
    const applyFilterOnProduct = () => {
        let sortingProduct = mockProduct;
        if (sort.length>0) {
            sortingProduct = sortingProduct.sort((a, b) => sort === "desc" ? a.price - b.price : b.price - a.price)
        }
        if (byRating > 0) {
            sortingProduct = sortingProduct.filter((product) => product.ratings === byRating)
        }
        if(!byStock){
            sortingProduct = sortingProduct.filter((product) => product.inStock)
        }
        if(fastdevelivery){
            sortingProduct = sortingProduct.filter((product) => product.fastDelivery)
        }
        if(searchQuery.length>0){
            sortingProduct = sortingProduct.filter((product) => product.name.toLocaleLowerCase().includes(searchQuery))
        }
        return sortingProduct;
    }

    return (
        <div className='products'>
            {
                applyFilterOnProduct().map(product =>
                    <SingleProduct id={product.id} name={product.name} price={product.price} imageUrl={product.image}
                        ratings={product.ratings} inStock={product.inStock} fastDelivery ={product.fastDelivery} />
                )
            }

        </div>
    )
}

export default Products
