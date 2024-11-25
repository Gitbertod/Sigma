import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const StaffPerson = () => {
  const { personId } = useParams();
  const { t } = useTranslation();

  const staff = {
    "karen-ames": {
      title: t("KarenAmes.KarenAmesTitle"),
      photo: "/karen-ames.jpg",
      text: <>{t("KarenAmes.KarenAmesText")}</>,
    },
    "katherine-reyes": {
      title: t("KatherineReyes.KatherineReyesTitle"),
      photo: "/katherine-reyes.jpg",
      text: t("KatherineReyes.KatherineReyesText"),
    },
    "guillermo-teramura": {
      title: t("GuillermoTeramura.GuillermoTeramuraTitle"),
      photo: "/guillermo-teramura.jpg",
      text: t("GuillermoTeramura.GuillermoTeramuraText"), 
    },
    "arturo-palomares": {
      title: t("ArturoPalomares.ArturoPalomaresTitle"),
      photo: "/arturo-palomares.jpg",
      text: t("ArturoPalomares.ArturoPalomaresText"), 
    },
    "craig-carleton": {
      title: t("CraigCarleton.CraigTitle"),
      photo: "/craig-smith.jpg",
      text: t("CraigCarleton.CraigText"),
    },
    "luiz-felipe-mauger": {
      title: t("LuizFelipeMauger.LuizFelipeTitle"),
      photo: "/luis-felipe-mauger.jpg",
      text: t("LuizFelipeMauger.LuizFelipeText"), 
    },
    "manuel-salazar": {
      title: t("ManuelSalazar.ManuelSalazarTitle"),
      photo: "/manuel-salazar.jpg",
      text: t("ManuelSalazar.ManuelSalazarText"), 
    },
    "ana-maria-bitar": {
      title: t("AnaMariaBitar.AnaMariaTitle"),
      photo: "/ana-maria-bitar.jpg",
      text: t("AnaMariaBitar.AnaMariaText"), 
    },
    "irzio-pinasco": {
      title: t("IrzioPinasco.IrzioPinascoTitle"),
      photo: "/irzio-pinasco.jpg",
      text: t("IrzioPinasco.IrzioPinascoText"), 
    },
    "martin-perez": {
      title: t("MartinPerez.MartinPerezTitle"),
      photo: "/martin-perez.jpg",
      text: t("MartinPerez.MartinPerezText"), 
    },
    "gonzalo-de-las-casas": {
      title: t("GonzaloDeLasCasas.GonzaloDeLasCasasTitle"),
      photo: "/gonzalo-de-las-casas.jpg",
      text: t("GonzaloDeLasCasas.GonzaloDeLasCasasText"), 
    }
  
  };

  const person = staff[personId];

  if (!person) {
    return <div>{t("StaffPerson.NotFound")}</div>;
  }
  return (
    <>
      <NavBar />
      <SectionComponent
        title={person.title}
        text={person.text}
        imgSrc={person.photo}
      />
    </>
  );
};

export default StaffPerson;
