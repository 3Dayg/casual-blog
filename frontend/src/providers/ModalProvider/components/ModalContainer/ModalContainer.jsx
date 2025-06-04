import React, { useImperativeHandle } from 'react';
import { createPortal } from "react-dom";
import styles from "./ModalContainer.module.css";
import clsx from "clsx";

function ModalContainer({ children, size = 'medium', className, ref }) {

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
            className={clsx(
                styles["modal-container"],
                styles[`modal-container--${size}`],
                className && styles[className]
            )}
        >
            {children}
        </dialog>,
        document.getElementById("modal-root")
    );
};

export default ModalContainer;