import React from "react";
import Header from "../components/layout_Components/header/header"
import Footer from "../components/layout_Components/footer/footer";
import MainSection from "../components/layout_Components/MainSection/mainSection";

function Home() {
    return (
      <>
        <Header headerTitle="Dashboard" breadCrumb={['Dashboard']} />
        <MainSection tableHeading="New Students"/>
        <Footer />
      </>
    );
  }
  
  export default Home;