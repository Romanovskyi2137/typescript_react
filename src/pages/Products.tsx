import React, { useContext, useEffect, useState } from "react";
import "../css/Products.css"
import axios from 'axios';
import { IProduct } from "../models";
import Product from "../components/Product/Product";
import { Modal } from "../components/Modal/Modal";



const URL = 'https://fakestoreapi.com/products?limit=5';

export default function Products () {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [product, setProduct] = useState<IProduct | null>(null);
    useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const {data} = await axios.get<IProduct[]>(URL);
                    setProducts(data)                    
                } catch (e) {
                    console.log(e)                   
                }
                
            };
            fetchProducts()
    }, [])

    return (
        <div className="Products__container">
            <div className="Products__content">
                <Modal
                    product={product}
                />
                {products.length !== 0 && products.map(product => <Product product={product} key={product.id}/>)} 
            </div>
        </div>
    )
}