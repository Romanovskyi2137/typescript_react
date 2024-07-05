import { useContext } from "react"
import { ModalContext, ProductContext} from "../../context/ModalContext"
import { useOutsideClick } from "../../hooks/useOutsideClick"
import cl from "./Modal.module.css"
import Card from "../Card/Card";


export default function Modal () {
    const {modal, hideModal} = useContext(ModalContext);
    const {product} = useContext(ProductContext);
    const ref = useOutsideClick(() => hideModal())
    return (
            modal ?
            (<div className={cl.Modal__background}>
                <div className={cl.Modal__container} ref={ref}>
                    <div className={cl.Modal__content}>
                        <Card content={product}/>
                    </div>
                </div>
            </div>)
            : <></>      
    )
}

