import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select onChange={changeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      
    </div>
  );
};

export default LanguageSelector;
