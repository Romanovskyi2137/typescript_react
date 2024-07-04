import { useContext, useState } from "react"
import { IProductContext, ModalContext} from "../../context/ModalContext"
import { useOutsideClick } from "../../hooks/useOutsideClick"
import cl from "./Modal.module.css"


interface IModalProps {
    product: IProductContext["product"]
}


export function Modal ({product}: IModalProps) {
    const {modal, hideModal} = useContext(ModalContext);
    const ref = useOutsideClick(() => hideModal())
    return (
            modal ?
            (<div className={cl.Modal__background}>
                <div className={cl.Modal__container} ref={ref}>
                    <div className={cl.Modal__content}>
                        
                    </div>
                </div>
            </div>)
            : <></>

        
    )
}

