import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { useTheme } from '../services/themeContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
      <nav className={styles.nav} role="navigation" aria-label="Main menu">
        <Link to="/" className={styles.link} aria-label="Home" aria-current="page">
          {t('home')}
        </Link>
        <Link to="/projects" className={styles.link} aria-label="Projects">
          {t('projects')}
        </Link>
        <Link to="/resume" className={styles.link} aria-label="Resume">
          {t('resume')}
        </Link>
      </nav>
      <div className={styles.controls}>
        <button
          onClick={toggleDarkMode}
          className={styles.toggleButton}
          aria-pressed={darkMode}
          aria-label={darkMode ? t('light_mode') : t('dark_mode')}
        >
          {darkMode ? t('light_mode') : t('dark_mode')}
        </button>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
