import React from "react";
import "../css/Products.css"
import Product from "../components/Product/Product";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";
import { useProducts } from "../hooks/useProducts";


const URL = 'https://fakestoreapi.com/products?limit=5';


export default function  Products () {
    const {products, isLoading} = useProducts(URL);

    return (
        <>
            <Modal/>
            <div className="Products__container">
                {!isLoading ?
                    <div className="Products__content">
                        {products.length !== 0 && products.map(product => 
                            <Product
                                product={product} 
                                key={product.id} 
                        />)} 
                    </div>
                    :
                        <Loader/>
                }
            </div>
        </>
        
    )
}