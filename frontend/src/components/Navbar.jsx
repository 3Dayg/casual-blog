import { Link } from "@tanstack/react-router";
import styles from "./Navbar.module.css";
import useBreakpoint from "../hooks/useBreakpoint";
import { useRef } from "react";
import NavMenu from "./NavMenu";
import ParrotSvg from "../assets/parrot.svg";
import { useModal } from "../context/ModalContext";
import { TiThMenu } from "react-icons/ti";

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
];

const Navbar = () => {
    const breakpoint = useBreakpoint();
    const menu = useRef();
    const {
        openModal
    } = useModal();

    return (
        <>
            <nav className={styles.navbar}>
                <h1 className={styles.navbar__header}>Papuga &#129436;
                    {/* <img src={ParrotSvg} alt="Your SVG" /> */}
                </h1>
                {breakpoint !== "xs" &&
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
                {
                    breakpoint === "xs" &&
                    <h1
                        onClick={() => openModal('nav')}
                    >
                        <TiThMenu />
                    </h1>
                }
            </nav>
            <NavMenu ref={menu} />
        </>
    );
};

export default Navbar