import React from "react";
import './header.css';

function Header(props) {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-sm-5" href="#">S2S Admin</a>
                <button className="navbar-toggler me-sm-5" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ms-sm-5 ms-lg-auto me-lg-5 mb-2 mb-lg-0">
                        <li className="nav-item pe-4">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className="nav-link" href="#">Students</a>
                        </li>
                        <li className="nav-item pe-4">
                            <a className="nav-link" href="#">Teachers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2><i className="fas fa-cog"></i> {props.headerTitle} <small className="header-small">Manage your institute</small>
                        </h2>
                    </div>
                </div>
            </div>
        </header>
    <section id="breadcrumb">
        <div className="container">
            <ol className="breadcrumb">
                <li className="active">Dashboard</li>
            </ol>
        </div>
    </section>
    </div>
    )
};

export default Header;