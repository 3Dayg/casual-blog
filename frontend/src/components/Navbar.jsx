import Logo from "../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={Logo} alt="Logo" />
        </nav>
    );
};

export default Navbar;