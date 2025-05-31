import React, { createContext, useContext, useState } from "react";
import ModalContainer from "./ModalContainer";
import NavModal from "./NavModal";


export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const modalComponents = {
    'nav': NavModal,
};

export function ModalProvider({ children }) {
    const [modal, setModal] = useState(null);
    const dialog = React.useRef();

    const openModal = (type, props = {}) => {
        console.log("test apertura", { type, props })
        setModal({ type, props });
        dialog.current.open();
    };

    const closeModal = () => {
        setModal(null);
        dialog.current.close();
    };

    const ModalComponent = modal?.type ? modalComponents[modal.type] : null;

    return (
        <ModalContext.Provider value={{
            closeModal,
            openModal
        }}>
            {children}
            <ModalContainer ref={dialog}>
                {ModalComponent && (
                  <ModalComponent {...modal.props} onClose={closeModal} />
                )}
            </ModalContainer>
        </ModalContext.Provider>
    )
}

