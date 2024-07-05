import React, { useContext } from "react";
import { IProduct } from "../../models";
import cl from "./Product.module.css"
import { ModalContext, ProductContext } from "../../context/ModalContext";

interface ProductProps {
    product: IProduct
}

export default function Product ({product}: ProductProps) {
    const {showModal} = useContext(ModalContext);
    const {setProduct} = useContext(ProductContext);
    const modalHandler = (e: React.MouseEvent): void => {
        showModal();
        setProduct(product)
    }
    return (
        <div className={cl.Product__container}>
            <div className={cl.Product__content}>
                <img src={product.image}/>
                <h2>{product.title}</h2>
                <h3>Price: {product.price}</h3>
                <button
                    onClick={modalHandler}
                >
                    Details
                </button>
            </div>
        </div>
    )
}