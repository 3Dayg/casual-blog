import React, { createContext, useContext, useState } from "react";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import NavModal from "./components/NavModal/NavModal";

export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const modalComponents = {
    'nav': { 
        component: NavModal, 
        size: 'fullscreen', // or 'small', 'medium', 'large', 'custom'
    },
    // 'confirm': { component: ConfirmModal, size: 'small' },
    // 'settings': { component: SettingsModal, size: 'large' },
    // 'custom': { component: CustomModal, size: 'medium', className: 'custom-modal' }
};

function ModalProvider({ children }) {
    const [modal, setModal] = useState(null);
    const dialog = React.useRef();

    const openModal = (type, props = {}) => {
        setModal({ type, props });
        dialog.current.open();
    };

    const closeModal = () => {
        setModal(null);
        dialog.current.close();
    };

    const modalConfig = modal?.type ? modalComponents[modal.type] : null;
    const ModalComponent = modalConfig?.component;

    return (
        <ModalContext.Provider value={{
            closeModal,
            openModal
        }}>
            {children}
            <ModalContainer 
                ref={dialog}
                size={modalConfig?.size}
                className={modalConfig?.className}
            >
                {ModalComponent && (
                  <ModalComponent {...modal.props} onClose={closeModal} />
                )}
            </ModalContainer>
        </ModalContext.Provider>
    )
}

export default ModalProvider;
