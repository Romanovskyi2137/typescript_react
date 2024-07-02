import React, { useContext } from "react";
import { IProduct } from "../../models";
import cl from "./Product.module.css"
import { ModalContext } from "../../context/ModalContext";

interface ProductProps {
    product: IProduct
}

export default function Product ({product}: ProductProps) {
    const {showModal} = useContext(ModalContext)
    const btnClickHandler = () => {
        
    }

    return (
        <div className={cl.Product__container}>
            <div className={cl.Product__content}>
                <img src={product.image}/>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <button
                    onClick={btnClickHandler}
                >
                    Details
                </button>
            </div>
        </div>
    )
}