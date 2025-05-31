import styles from "./Navbar.module.css";

function NavMenu({ ref }) {
    return (
        <dialog
            className={styles['nav-menu']}
            ref={ref}
        >
            Navigation MENU mobile
        </dialog>
    );
}

export default NavMenu;