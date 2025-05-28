import { Link } from "@tanstack/react-router";
import styles from "./Navbar.module.css";
import useBreakpoint from "../hooks/useBreakpoint";

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
];

const Navbar = () => {
    const breakpoint = useBreakpoint();

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.navbar__header}>Papuga &#129436;</h1>
            { breakpoint !== "xs" &&
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
            }
            { breakpoint === "xs" && <h1>&#128221;</h1>}
        </nav>
    );
};

export default Navbar;
