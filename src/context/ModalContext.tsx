import React, {ReactNode, createContext, useState} from "react"
import { IProduct } from "../models"

export interface IModalVisible {
    modal: boolean
    showModal: () => void
    hideModal: () => void
}

export interface IProductContext {
    product: IProduct | null
    setProduct: (product: IProduct) => void
}

const defaultProdValue: IProductContext = {
    product: null,
    setProduct: () => {}
}

export const ModalContext = createContext<IModalVisible>({
    modal: false,
    showModal: () => {},
    hideModal: () => {},
})

export const ProductContext = createContext<IProductContext>(defaultProdValue)


export const ModalState = ({children}: {children: ReactNode}) => {
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState<IProductContext["product"]>(null)
    const showModal = () => {
        setModal(true)
    };
    const hideModal = () => {
        setModal(false)
    }

    return (
        <ModalContext.Provider value={{modal, showModal, hideModal}}>
            <ProductContext.Provider value={{product, setProduct}}>
                {children}
            </ProductContext.Provider>
        </ModalContext.Provider>
    )
}