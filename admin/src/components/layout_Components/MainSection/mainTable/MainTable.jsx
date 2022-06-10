import React from "react";

function MainTable() {
    const style = {
        backgroundColor:"#cccccc !important"
    };

    return (
        //  Latest Students
        <div className="container">
            <div className="card mt-3">
                <h5 className="card-header main-color-bg">New Students</h5>
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
                                    <td><a className="btn btn-dark action-button" data-bs-toggle="modal"
                                        href="#removeStudentModal">Remove Student</a><a
                                            className="btn btn-dark ms-2 action-button mt-2 mt-md-0 "
                                            data-bs-toggle="modal" href="#more-info-modal">More
                                            Info</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td><a className="btn btn-dark action-button" data-bs-toggle="modal"
                                        href="#removeStudentModal">Remove Student</a><a
                                            className="btn btn-dark ms-2 action-button mt-2 mt-md-0 "
                                            data-bs-toggle="modal" href="#more-info-modal">More
                                            Info</a></td>
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