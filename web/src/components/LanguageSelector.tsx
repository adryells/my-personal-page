import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
      const languages = ['en', 'pt', 'es'];
      const nextLanguage = languages[(languages.indexOf(i18n.language) + 1) % languages.length];
      i18n.changeLanguage(nextLanguage);
    };

    return (
        <div>
        {i18n.language === 'pt' ? (
            <img src="/assets/flags/br.png" alt="PT-BR" onClick={toggleLanguage} loading="lazy" />
        ) : i18n.language === 'es' ? (
            <img src="/assets/flags/es.webp" alt="ES" onClick={toggleLanguage} loading="lazy" />
        ) : (
            <img src="/assets/flags/us.png" alt="EN-US" onClick={toggleLanguage} loading="lazy" />
        )}
        </div>
    )
}

export default LanguageSelector