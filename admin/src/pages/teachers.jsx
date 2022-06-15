import React from "react";
import Header from "../components/layout_Components/header/header"
import Footer from "../components/layout_Components/footer/footer";
import MainSection from "../components/layout_Components/MainSection/mainSection";

function Teacher() {
    return (
      <>
        <Header headerTitle="Teachers" breadCrumb={['Dashboard','Teachers']} />
        <MainSection page="teacher" tableHeading="Teachers"/>
        <Footer />
      </>
    );
  }
  
  export default Teacher;