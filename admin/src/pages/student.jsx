import React from "react";
import Header from "../components/layout_Components/header/header"
import Footer from "../components/layout_Components/footer/footer";
import MainSection from "../components/layout_Components/MainSection/mainSection";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Student() {
  const token = sessionStorage.getItem("token");
  const [data, setData] = React.useState([]);
  const navi = useNavigate();
  React.useEffect(() => {
    if (token==null) {
      navi("/");
    }else{
      const fetchData = async () => {
        try {
          const result = await axios(
            "http://localhost:3001/admin/getstudentdata"
          );
          setData(result.data);
        } catch (error) {
          setData([]);
        }
      };
      fetchData();

    }
  }, [token,navi]);
  
    return (
      <>
        <Header headerTitle="Students" breadCrumb={['Dashboard','Student']} />
        <MainSection page="student" data={data} tableHeading="All Students"/>
        <Footer />
      </>
    );
  }
  
  export default Student;