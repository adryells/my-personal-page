import { useEffect } from 'react';
import i18n from '../i18n';

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  twitterCard?: string;
  twitterCreator?: string;
  ldJson?: object;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  url,
  image,
  twitterCard,
  twitterCreator,
  ldJson,
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMeta = (
      attr: 'name' | 'property',
      name: string,
      content: string
    ) => {
      let el = document.head.querySelector(
        `meta[${attr}="${name}"]`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    if (description) setMeta('name', 'description', description);
    if (twitterCard) setMeta('name', 'twitter:card', twitterCard);
    if (twitterCreator) setMeta('name', 'twitter:creator', twitterCreator);

    if (url) setMeta('property', 'og:url', url);
    if (description) setMeta('property', 'og:description', description);
    if (image) setMeta('property', 'og:image', image);

    if (url) {
      let link = document.head.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = url;
    }

    // set html lang attribute
    document.documentElement.lang = i18n.language;

    if (ldJson) {
      let script = document.head.querySelector(
        'script[type="application/ld+json"]'
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(ldJson, null, 2);
    }
  }, [
    title,
    description,
    url,
    image,
    twitterCard,
    twitterCreator,
    ldJson,
  ]);

  return null;
};

export default Seo;
