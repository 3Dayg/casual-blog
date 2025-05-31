import React, { useImperativeHandle } from 'react';
import { createPortal } from "react-dom";
import styles from "./ModalContainer.module.css";

function ModalContainer({ children, ref }) {

    const dialog = React.useRef();

    useImperativeHandle(ref, () => ({
        open: () => {
            if (dialog.current) {
                dialog.current.showModal();
            }
        },
        close: () => {
            if (dialog.current) {
                dialog.current.close();
            }
        }
    }));

    return createPortal(
        <dialog
            ref={dialog}
            className={styles["modal-container"]}
        >
            {children}
        </dialog>,
        document.getElementById("modal-root")
    );
};

export default ModalContainer;