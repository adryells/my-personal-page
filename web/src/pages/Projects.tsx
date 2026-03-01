import React from 'react';
import { useTranslation } from 'react-i18next';
import data from '../services/projectsData.json';
import Seo from '../components/Seo';
import styles from './Projects.module.css';

interface Project {
  title: string;
  overview: string;
  technologies?: string;
  functionalities?: string;
  hosting?: string;
  projectLink?: string;
  codeLink?: string;
  contributors?: Array<{ name: string; url: string }>;
}

const Projects: React.FC = () => {
  const { i18n, t } = useTranslation();
  const projects: Project[] = (data as any)[i18n.language] || (data as any).en;

  return (
    <>
      <Seo
        title={`Adryell – ${t('projects')}`}
        description="List of projects built by Adryell"
        url="https://www.adryell.com/projects"
        twitterCard="summary"
      />
      <div className={styles.container}>
        <h1>{t('projects')}</h1>
        <div className={styles.grid}>
        {projects.map((p, idx) => (
          <div key={idx} className={styles.card}>
            <h2>{p.title}</h2>
            <p>{p.overview}</p>
            {p.technologies && (
              <p>
                <strong>{t('usedTech')}:</strong> {p.technologies}
              </p>
            )}
            {p.functionalities && (
              <p>
                <strong>{t('functionalities')}:</strong> {p.functionalities}
              </p>
            )}
            {p.hosting && (
              <p>
                <strong>{t('hosting')}:</strong> {p.hosting}
              </p>
            )}
            {p.projectLink && (
              <p>
                <a href={p.projectLink} target="_blank" rel="noopener noreferrer">
                  {t('projectLink')}
                </a>
              </p>
            )}
            {p.codeLink && (
              <p>
                <a href={p.codeLink} target="_blank" rel="noopener noreferrer">
                  {t('codeLink')}
                </a>
              </p>
            )}
            {p.contributors && p.contributors.length > 0 && (
              <p>
                <strong>{t('contributors')}:</strong>{' '}
                {p.contributors.map((c, i) => (
                  <span key={i}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                    {i < p.contributors!.length - 1 && ', '}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
