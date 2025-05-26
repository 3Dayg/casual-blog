import { Link } from "@tanstack/react-router";
import styles from "./Navbar.module.css";

const LINKS = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" }
];

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            
            <h1>&#129436; Papuga</h1>
            <ul className={styles.navbar__links}>
                {LINKS.map((link) => (
                    <li key={link.to}>
                        <Link 
                            to={link.to}
                            className={styles.navbar__link}
                            activeProps={{ className: styles['navbar__link--active'] }}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
    