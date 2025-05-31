import styles from './NavModal.module.css';
import { Link } from '@tanstack/react-router';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const NavModal = ({ onClose }) => {
  return (
    <div className={styles['nav-modal']}>
      <nav>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={onClose}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default NavModal;