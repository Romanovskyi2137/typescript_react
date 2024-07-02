import { IProductContext } from "../../context/ModalContext"
import { IProduct } from "../../models"
import cl from "./Modal.module.css"


interface IModalProps {
    product: IProductContext["product"]  
}


export function Modal (props: IModalProps) {
    

    return (
        <div className={cl.Modal__background}>
            <div className={cl.Modal__container}>
                <div className={cl.Modal__content}>
                    
                </div>
            </div>
        </div>
    )
}

