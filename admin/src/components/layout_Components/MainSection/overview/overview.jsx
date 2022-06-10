import React from "react";

function Overview() {
    return (
        <>
            <div className="col-md-3" id="side-bar">
                <div className="list-group">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action active main-color-bg"
                        aria-current="true"
                    >
                        <i className="fas fa-cog"></i> Dashboard
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <i className="fas fa-graduation-cap"></i>
                        Students <span className="badge bg-secondary ">100</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <i className="fas fa-chalkboard-teacher"></i> Teachers{" "}
                        <span className="badge bg-secondary ">20</span>
                    </a>
                </div>
            </div>
            <div className="col-md-9" id="overview">
                <div className="card mt-3 mt-md-0">
                    <div className="card-header main-color-bg">
                        <h6>Overview</h6>
                    </div>
                    <div className="card-body row">
                        <a href="#" className="col-md-6">
                            <div>
                                <div className="well">
                                    <h2><i className="fas fa-graduation-cap"></i> 200</h2>
                                    <h4>Students</h4>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="col-md-6 mt-3 mt-md-0">
                            <div>
                                <div className="well">
                                    <h2><i className="fas fa-chalkboard-teacher"></i> 200</h2>
                                    <h4>Teachers</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;
