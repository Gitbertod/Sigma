import styles from "./ContactView.module.css";

import { CardContact } from "../../components/CardContact/CardContact";
import ContactoForm from "../../components/form-contacto/ContactoForm";
import NavBar from "../../components/navbar/NavBar";
import { useTranslation } from "react-i18next";

const ContactView = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.contactoContainer}>
          <h2 className={styles.contactoTitulo}>{t("ContactView.Contact")}</h2>
          <p className={styles.contactoSubtitulo}>
            {t("ContactView.Paragraph")}
          </p>
          <div className={styles.cards}>
            <CardContact />
            <div className={styles.formularioContainer}>
              <ContactoForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactView;
