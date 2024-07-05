import React, { useEffect, useState } from "react";
import "../css/Products.css"
import axios from 'axios';
import { IProduct } from "../models";
import Product from "../components/Product/Product";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";



const URL = 'https://fakestoreapi.com/products?limit=5';

export default function  Products () {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const {data} = await axios.get<IProduct[]>(URL);
                    setProducts(data);
                    setIsLoading(false)                    
                } catch (e) {
                    console.log(e)                   
                }
                
            };
            fetchProducts()
    }, [])

    return (
        <div className="Products__container">
            {!isLoading ?
                <div className="Products__content">
                    <Modal/>
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
    )
}