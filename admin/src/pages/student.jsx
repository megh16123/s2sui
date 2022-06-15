import React from "react";
import Header from "../components/layout_Components/header/header"
import Footer from "../components/layout_Components/footer/footer";
import MainSection from "../components/layout_Components/MainSection/mainSection";

function Student() {
    return (
      <>
        <Header headerTitle="Students" breadCrumb={['Dashboard','Student']} />
        <MainSection page="student" tableHeading="All Students"/>
        <Footer />
      </>
    );
  }
  
  export default Student;