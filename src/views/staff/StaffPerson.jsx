import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";


const StaffPerson = () => {
  const { personId } = useParams();
  const { t } = useTranslation();

  const personsData = {
    staff: {
      "karen-ames": {
        name: "Karen Ames",
        position: "VP - Legal Affairs",
        photo: "/karen-ames.jpg",
        linkedin: "https://www.linkedin.com/in/karen-ames-26008824/",
        text: t("KarenAmes.KarenAmesText")
      },
      "katherine-reyes": {
        name: "Katherine Reyes",
        position: "CEO",
        photo: "/katherine-reyes.jpg",
        linkedin: "https://www.linkedin.com/in/katherine-reyes-warthon-a480612/",
        text: t("KatherineReyes.KatherineReyesText"),
      },
      "guillermo-teramura": {
        name: "Guillermo Teramura",
        position: "VP - Assets and Insurance",
        photo: "/guillermo-teramura.jpg",
        linkedin: "https://www.linkedin.com/in/gteramura/",
        text: t("GuillermoTeramura.GuillermoTeramuraText"),
      },
      "arturo-palomares": {
        name: "Arturo Palomares",
        position: "VP - Finance, Accounting and HR",
        photo: "/arturo-palomares.jpg",
        linkedin: "https://www.linkedin.com/in/arturo-palomares-588a5214/",
        text: t("ArturoPalomares.ArturoPalomaresText"),
      },
      "ivan-alencastre": {
        name: "Ivan Alencastre",
        position: "VP - Finance, Accounting and HR",
        photo: "/ivan-alencastre.jpg",
        linkedin: "https://www.linkedin.com/in/arturo-palomares-588a5214/",
        text: t("IvanAlencastre.Text"),
      },
    },
    investmentCommittee: {
      "craig-carleton": {
        name: "Craig Carleton",
        position: "Investment Committee Member",
        photo: "/craig-smith.jpg",
        linkedin: "https://www.linkedin.com/in/craig-carleton/",
        text: t("CraigCarleton.CraigText"),
      },
      "luiz-felipe-mauger": {
        name: "Luiz Felipe Mauger",
        position: "Investment Committee Member",
        photo: "/luis-felipe-mauger.jpg",
        linkedin: "https://www.linkedin.com/in/luiz-felipe-mauger/",
        text: t("LuizFelipeMauger.LuizFelipeText"),
      },
      "manuel-salazar": {
        name: "Manuel Salazar",
        position: "Investment Committee Member",
        photo: "/manuel-salazar.jpg",
        linkedin: "https://www.linkedin.com/in/manuel-salazar/",
        text: t("ManuelSalazar.ManuelSalazarText"),
      },
    },
    boardOfDirectors: {
      "irzio-pinasco": {
        name: "Irzio Pinasco",
        position: "Board Director",
        photo: "/irzio-pinasco.jpg",
        linkedin: "https://www.linkedin.com/in/irzio-pinasco/",
        text: t("IrzioPinasco.IrzioPinascoText"),
      },
      "gonzalo-de-las-casas": {
        name: "Gonzalo de las Casas",
        position: "Board Director",
        photo: "/gonzalo-de-las-casas.jpg",
        linkedin: "https://www.linkedin.com/in/gonzalo-de-las-casas/",
        text: t("GonzaloDeLasCasas.GonzaloDeLasCasasText"),
      },
      "martin-perez": {
        name: "Martin Perez",
        position: "Board Director",
        photo: "/martin-perez.jpg",
        linkedin: "https://www.linkedin.com/in/martin-perez/",
        text: t("MartinPerez.MartinPerezText"),
      },
      "ana-maria-bitar": {
        name: "Ana Maria Bitar",
        position: "Board Director",
        photo: "/ana-maria-bitar.jpg",
        linkedin: "https://www.linkedin.com/in/ana-maria-bitar/",
        text: t("AnaMariaBitar.AnaMariaText"),
      },
    },
  };

  const person =
    personsData.staff[personId] ||
    personsData.investmentCommittee[personId] ||
    personsData.boardOfDirectors[personId];

  if (!person) {
    return <div>{t("StaffPerson.NotFound")}</div>;
  }
  return (
    <>
      <NavBar />
      <SectionComponent
        title={person.name}
        text={person.text}
        imgSrc={person.photo}
      />
    </>
  );
};

export default StaffPerson;
