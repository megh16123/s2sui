import React, { useEffect, useState } from "react";
import MoreInfo from "../../MoreInfoModals";
import RemoveModals from "../../RemoveModals";

function MainTable(props) {
    const style = {
        backgroundColor: "#cccccc !important"
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (props.page === "teacher") {
                const response = await fetch("http://localhost:3001/teacher/getteacher");
                const dat = await response.json();
                setData(dat);
            }
            if (props.page === "student") {
                const response = await fetch("http://localhost:3001/student/studentdata");
                const dat = await response.json();
                setData(dat);
            }
        }
        fetchData();

    }, [props]);
    const datafilt = ()=>{
        if(props.page==="student")
        {
            return (data.map((item, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item._id}</td>
                    <td>{item.classes.join(', ')}</td>
                    <td><RemoveModals email={item._id} page={props.page} />&nbsp;&nbsp;<MoreInfo email={item._id} classes={item.classes} amount={item.fee} page={props.page} /></td>
                </tr>
            )))
        }
        else{
            console.log("harkate by meghansh");
            return (data.map((item, index) => (
                <tr key={index}>
                 
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.qualification}</td>
                    <td><RemoveModals email={item._id} page={props.page} />&nbsp;&nbsp;<MoreInfo email={item._id} amount={item.salary} page={props.page} /></td>
                </tr>
            )))  
        }
    }
    return (
        <div className="container">
            <div className="card mt-3">
                <h5 className="card-header main-color-bg">{props.tableHeading}</h5>
                <div className="card-body p-2">
                    <div className="col-md-12" style={style}>
                        <table className="table table-hover m-0" id="dataTable">
                            <thead>
                                <tr>
                                    <th scope="col">S. No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">{props.column}</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={-1}>
                                    <th scope="row"></th>
                                    <td>{null}</td>
                                    <td>{null}</td>
                                </tr>
                                {datafilt()}
                                {/* <tr>
                                    <th scope="row">1</th>
                                    <td>MEghansh lhendi</td>
                                    <td>pta ni</td>
                                    <td><RemoveModals email={item.id} page={props.page} />&nbsp;&nbsp;<MoreInfo email={item.id} classes={item.classes} amount={item.fee} page={props.page}/></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainTable;
