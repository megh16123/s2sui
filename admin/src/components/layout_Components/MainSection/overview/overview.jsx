import React from "react";
import "./overview.css";
import { NavLink } from "react-router-dom";

function Overview(props) {
    function DataComponent() {
        if (props.page === "student") {
            return (
                <>
                <div className="card-header main-color-bg">
                    <h6>Students</h6>
                </div>
                <div className="card-body row">
                    <button className="col-md-2">
                        <div>
                            <div className="well">
                                <h2>
                                    200
                                </h2>
                                <h4>Class 9th</h4>
                            </div>
                        </div>
                    </button>

                    <button className="col-md-2 mt-3 mt-md-0">
                        <div>
                            <div className="well">
                                <h2>
                                    200
                                </h2>
                                <h4>Class 10th</h4>
                            </div>
                        </div>
                    </button>
                    <button className="col-md-2 mt-3 mt-md-0">
                        <div>
                            <div className="well">
                                <h2>
                                    200
                                </h2>
                                <h4>Class 11th</h4>
                            </div>
                        </div>
                    </button>
                    <button className="col-md-2 mt-3 mt-md-0">
                        <div>
                            <div className="well">
                                <h2>
                                    200
                                </h2>
                                <h4>Class 12th</h4>
                            </div>
                        </div>
                    </button>
                    <button className="col-md-2 mt-3 mt-md-0">
                        <div>
                            <div className="well">
                                <h2>
                                    200
                                </h2>
                                <h4>JEE</h4>
                            </div>
                        </div>
                    </button>
                    <button className="col-md-2 mt-3 mt-md-0">
                        <div>
                            <div className="well">
                                <h2>
                                    200
                                </h2>
                                <h4>NEET</h4>
                            </div>
                        </div>
                    </button>
                </div>
            </>
            )
        }
        return (
            <>
                <div className="card-header main-color-bg">
                    <h6>Overview</h6>
                </div>
                <div className="card-body row">
                    <NavLink to="/student" className="col-md-6">
                        <div>
                            <div className="well">
                                <h2>
                                    <i className="fas fa-graduation-cap"></i> 200
                                </h2>
                                <h4>Students</h4>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/teacher" className="col-md-6 mt-3 mt-md-0">
                        <div>
                            <div className="well">
                                <h2>
                                    <i className="fas fa-chalkboard-teacher"></i> 200
                                </h2>
                                <h4>Teachers</h4>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </>
        )
    }

    
    return (
        <>
            <div className="col-md-3" id="side-bar">
                <div className="list-group">
                    <NavLink
                        to="/"
                        className="list-group-item list-group-item-action active main-color-bg"
                        aria-current="true"
                        style={{ color: "white" }}
                    >
                        <i className="fas fa-cog"></i> Dashboard
                    </NavLink>
                    <NavLink
                        to="/student"
                        className="list-group-item list-group-item-action"
                    >
                        <i className="fas fa-graduation-cap"></i>
                        Students <span className="badge bg-secondary ">100</span>
                    </NavLink>
                    <NavLink
                        to="/teacher"
                        className="list-group-item list-group-item-action"
                    >
                        <i className="fas fa-chalkboard-teacher"></i> Teachers{" "}
                        <span className="badge bg-secondary ">20</span>
                    </NavLink>
                </div>
            </div>
            <div className="col-md-9" id="overview">
                <div className="card mt-3 mt-md-0">
                    {
                        DataComponent()
                    }
                </div>
            </div>
        </>
    );
}

export default Overview;
