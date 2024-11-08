import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";

const AnaMariaBitar = () => {
  return (
    <>
    <NavBar></NavBar>
      <SectionComponent
        title="Ana Maria Bitar"
        text={
          <>
            An executive and philanthropist with 20 years of experience in
            corporate management and leadership of nonprofit organizations, Ana
            María holds a Bachelor's degree in Economics and Philosophy from
            Duke University and an MBA with a specialization in Finance and
            Social Entrepreneurship from Columbia Business School. She has
            served as the General Manager of Convergia Networks, a
            telecommunications company in Venezuela and the United States, and
            as the Development and Brand Manager at Enseña Perú, among other
            roles. Currently, she serves on various boards of nonprofit
            educational organizations, such as Enseña Perú and Sembrando Juntos.
          </>
        }
        imgSrc="/ana-maria-bitar.jpg"
      />
    </>
  );
};

export default AnaMariaBitar;
