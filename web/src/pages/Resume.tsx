import React from 'react';
import { useTranslation } from 'react-i18next';
import data from '../services/resumeData.json';
import Seo from '../components/Seo';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  const { i18n, t } = useTranslation();
  const resume: any = (data as any)[i18n.language] || (data as any).en;

  return (
    <>
      <Seo
        title={`Adryell – ${t('resume')}`}
        description="Currículo de Paulo Adryell, desenvolvedor backend"
        url="https://www.adryell.com/resume"
        image="/assets/pp/pic.jpg"
        twitterCard="summary"
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{t('resume')}</h1>
          <a href="/paulo_adryell_ptbr.pdf" download="paulo_adryell_ptbr.pdf" className={styles.download}>
            📄 {t('download_cv')}
          </a>
        </div>
      <section className={styles.section}>
        <h2>{t('summary')}</h2>
        <p>{resume.summary}</p>
      </section>

      <section className={styles.section}>
        <h2>{t('experience')}</h2>
        {resume.experience.map((exp: any, idx: number) => (
          <div key={idx} className={styles.entry}>
            <div className={styles.entryHeader}>
              <strong>{exp.company}</strong> — {exp.role}
            </div>
            <div className={styles.entryMeta}>
              {exp.start} – {exp.end} {exp.location && <>• {exp.location}</>}
            </div>
            <ul>
              {exp.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{t('projects')}</h2>
        {resume.projects.map((p: any, idx: number) => (
          <div key={idx} className={styles.entry}>
            <strong>{p.title} ({p.year})</strong>
            <p className={styles.projectDesc}>{p.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{t('education')}</h2>
        {resume.education.map((e: any, idx: number) => (
          <div key={idx} className={styles.entry}>
            <strong>{e.institution}</strong> — {e.degree}
            <div className={styles.entryMeta}>
              {e.start} – {e.end} {e.location && <>• {e.location}</>}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{t('skills')}</h2>
        <div className={styles.skillsGrid}>
          <div>
            <strong>Languages</strong>
            <p>{resume.skills.languages.join(', ')}</p>
          </div>
          <div>
            <strong>Frameworks</strong>
            <p>{resume.skills.frameworks.join(', ')}</p>
          </div>
          <div>
            <strong>Databases</strong>
            <p>{resume.skills.databases.join(', ')}</p>
          </div>
          <div>
            <strong>Infra/DevOps</strong>
            <p>{resume.skills.infra.join(', ')}</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Resume;
