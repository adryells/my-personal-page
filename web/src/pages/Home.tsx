import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import styles from './Home.module.css';
import SocialArea from '../components/SocialArea';
import { useTheme } from '../services/themeContext';

const Home = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <>
      <Seo
        title={`Adryell – ${t('home')}`}
        description="Personal page of Adryell, backend developer"
        url="https://www.adryell.com/"
        image="/assets/pp/pic.jpg"
        twitterCard="summary_large_image"
        twitterCreator="@adryells"
        ldJson={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Paulo Adryell",
          url: "https://www.adryell.com",
          sameAs: [
            "https://github.com/adryells",
            "https://www.linkedin.com/in/pauloadryell/",
          ],
          jobTitle: "Backend Developer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Caxias",
            addressRegion: "MA",
            addressCountry: "BR",
          },
        }}
      />
      <div className={`${styles.bodyMain} ${darkMode ? styles.dark : styles.light}`}>
        <div className={styles.leftColumn}>
        <img
          src="/assets/pp/pic.jpg"
          srcSet="/assets/pp/pic.webp 1x, /assets/pp/pic.jpg 2x"
          alt="Paulo Adryell"
          className={styles.profileImage}
          loading="lazy"
          width="150"
          height="150"
        />
        <h1 className={styles.name}>Paulo Adryell</h1>
        <h2 className={styles.profession}>{t('profession') || 'Backend Developer'}</h2>
        <a href="mailto:adryellpaulo@gmail.com" className={styles.contactMe} aria-label="Send email to Adryell">
          {t('contact_me')}
        </a>
        <SocialArea className={styles.socialArea} />
      </div>

      <div className={styles.rightColumn}>
        <h2>{t('about_heading')}</h2>
        <p className={styles.aboutMe}>{t('text_1')}</p>
        <p className={styles.aboutMe}>{t('text_2')}</p>
        <a
          href="https://github.com/adryells?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectsLink}
        >
          {t('view_github')}
        </a>
        <a
          href="/#/resume"
          className={styles.projectsLink}
          style={{ marginLeft: '10px' }}
        >
          {t('resume')}
        </a>
      </div>
    </div>
    </>
  );
};

export default Home;
