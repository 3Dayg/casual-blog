import styles from './NavModal.module.css';
import { Link } from '@tanstack/react-router';
import { Typography } from '@components/Typography/Typography';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const NavModal = ({ onClose }) => {
  return (
      <nav className={styles['nav-modal']}>
        <button 
          className={styles['nav-modal__close-btn']}
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          X
        </button>
        
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={onClose}
                activeProps={{ className: styles['nav-modal__link--active'] }}
              >
                <Typography variant="h1" size="responsive" spacing="responsive">
                    {link.label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default NavModal;