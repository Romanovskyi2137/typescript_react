import React, {ReactNode, createContext, useState} from "react"

export interface IModalVisible {
    modal: boolean
    showModal: () => void
    hideModal: () => void 
}
  
export const ModalContext = createContext<IModalVisible>({
    modal: false,
    showModal: () => {},
    hideModal: () => {}
})

export const ModalState = ({children}: {children: ReactNode}) => {
    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(true)
    };
    const hideModal = () => {
        setModal(false)
    }
    return (
        <ModalContext.Provider value={{modal, showModal, hideModal}}>
            {children}
        </ModalContext.Provider>
    )
}