import { Link } from "@tanstack/react-router";
import Logo from "../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={Logo} alt="Logo" className={styles.navbar__logo} />
            <ul className={styles.navbar__links}>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
    