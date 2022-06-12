import React from "react";
import Overview from './overview/overview';
import MainTable from "./mainTable/MainTable";
// import RemoveStudent from "../RemoveStudentModals";
// import MoreInfo from "../MoreInfoModals";
import "./mainSection.css";

function mainSection (){
    return (
        
        <section id="main">
            <div class="container">
                <div class="row">
                <Overview />
                <MainTable />
                </div>
            </div>
        </section>
    )
};

export default mainSection;