import styles from "./ContactView.module.css";

import { CardContact } from '../../components/CardContact/CardContact';
import ContactoForm from "../../components/form-contacto/ContactoForm";
import NavBar from "../../components/navbar/NavBar";


const ContactView = () => {
  return (
    <>
    <NavBar></NavBar>
      <div className={styles.container}>
        
        <div className={styles.contactoContainer}>
          <h2 className={styles.contactoTitulo}>CONTACTO</h2>
          <p className={styles.contactoSubtitulo}>
            Bienvenido al portal de Solicitud de Información SIGMA. Nuestro
            servicio es rápido y su información es segura <br></br> no vendemos
            ni distribuimos su información a nadie.
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
  )
}

export default ContactView