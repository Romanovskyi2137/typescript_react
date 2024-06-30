import React from "react";
import { IProduct } from "../../models";
import cl from "./Product.module.css"

interface ProductProps {
    product: IProduct
}

export default function Product ({product}: ProductProps) {
    

    return (
        <div className={cl.Product__container}>
            <div className={cl.Product__content}>
                <img src={product.image}/>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
            </div>
        </div>
    )
}