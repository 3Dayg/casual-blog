import { Link } from "@tanstack/react-router";
import styles from "./Navbar.module.css";
import useBreakpoint from "@hooks/useBreakpoint";
import { useModal } from "@providers/ModalProvider/ModalProvider";
import { TiThMenu } from "react-icons/ti";
import { Typography } from "@components/Typography/Typography";

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
];

const Navbar = () => {
    const { breakpoint } = useBreakpoint();
    const {
        openModal
    } = useModal();

    return (
        <>            <nav className={styles.navbar}>
                <Typography 
                    variant="h1" 
                    size="responsive" 
                    spacing="none"
                    className={styles.navbar__header}
                >
                    Papuga &#129436;
                </Typography>
                {breakpoint !== "xs" &&
                    <ul className={styles.navbar__links}>
                        {LINKS.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className={styles.navbar__link}
                                    activeProps={{ className: styles['navbar__link--active'] }}
                                >
                                    <Typography variant="label" size="responsive" spacing="responsive">
                                        {link.label}
                                    </Typography>
                                </Link>
                            </li>
                        ))}
                    </ul>
                }                {
                    breakpoint === "xs" &&
                    <button
                        onClick={() => openModal('nav')}
                        className={styles.navbar__menuButton}
                        aria-label="Open navigation menu"
                    >
                        <TiThMenu />
                    </button>
                }
            </nav>
        </>
    );
};

export default Navbar