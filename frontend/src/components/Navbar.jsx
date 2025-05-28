import { Link } from "@tanstack/react-router";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
];

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 420);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 420);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <nav className={styles.navbar}>
            <h1 className={styles.navbar__header}>Papuga &#129436;</h1>
            { !isMobile &&
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
            { isMobile && <h1>&#128221;</h1>}
        </nav>
    );
};

export default Navbar;
