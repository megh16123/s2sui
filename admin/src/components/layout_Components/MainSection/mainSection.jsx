import React from "react";
import Overview from './overview/overview';
import MainTable from "./mainTable/MainTable";
import RemoveStudentModals from "../RemoveStudentModals";
import MoreInfo from "../MoreInfoModals";
import "./mainSection.css";

function mainSection (){
    return (
        
        <section id="main">
            <div class="container">
                <div class="row">
                <Overview />
                <MainTable />
                <RemoveStudentModals />
                <MoreInfo />
                </div>
            </div>
        </section>
    )
};

export default mainSection;