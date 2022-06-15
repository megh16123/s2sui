import React from "react";
import MoreInfo from "../../MoreInfoModals";
import RemoveStudent from "../../RemoveStudentModals";

function MainTable(props) {
    const style = {
        backgroundColor: "#cccccc !important"
    };

    return (
        //  Latest Students
        <div className="container">
            <div className="card mt-3">
                <h5 className="card-header main-color-bg">{props.tableHeading}</h5>
                <div className="card-body p-2">
                    <div className="col-md-12" style={style}>
                        <table className="table table-hover m-0" id="studentTable">
                            <thead>
                                <tr>
                                    <th scope="col">S. No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">classes</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><RemoveStudent />&nbsp;&nbsp;<MoreInfo /></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td><RemoveStudent />&nbsp;&nbsp;<MoreInfo /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainTable;