import React from "react";
import Overview from './overview/overview';
import MainTable from "./mainTable/MainTable";

import "./mainSection.css";

function mainSection (props){
    return (
        <section id="main">
            <div class="container">
                <div class="row">
                <Overview page={props.page}/>
                <MainTable tableHeading={props.tableHeading}/>
                </div>
            </div>
        </section>
    )
};

export default mainSection;