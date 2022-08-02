import React, { useEffect, useState, useRef } from "react";
import EditInfoModals from "../../EditInfoModals";
import MoreInfo from "../../MoreInfoModals";
import RemoveModals from "../../RemoveModals";

// export function TblFunc(props) {
 
//     $.DataTable = require('datatables.net')
//     const tableRef = useRef()
     
//     useEffect(() => {
//         console.log(tableRef.current)
//         const table = $(tableRef.current).DataTable(
//             {
//                 data: props.data,
//                     columns: [
//                         { title: "Name"},
//                         { title: "Position"},
//                         { title: "Office"},
//                         { title: "Extn."},
//                         { title: "Start data"},
//                         { title: "Salary"}
//                     ],
//                     destroy: true  // I think some clean up is happening here
//             }
//         )
//         // Extra step to do extra clean-up.
//         return function() {
//             console.log("Table destroyed")
//             table.destroy()
//         }
//     },[])
//         return (
//             <div>
//                 <table className="display" width="100%" ref={ tableRef }></table>
//             </div>
             
//         )
//     }

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
                const d = dat.map((item) => {
                    item.fee = item.classenrolled.map((it) => {
                        return it.fee;
                    })
                    item.classenrolled = item.classenrolled.map((ite) => {
                        return ite.clas;
                    });

                    return item;
                })
                setData(d);
            }
            $(document).ready(function loadDataTble(){
                $("#dataTable").DataTable();
              });
        }
        fetchData();

    }, [props]);
    const datafilt = () => {
        if (props.page === "student") {
            return (data.map((item, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.classenrolled.join(",")}</td>
                    <td><RemoveModals email={item.email} page={props.page} />&nbsp;&nbsp;<MoreInfo data={item} page={props.page} />
                    &nbsp;&nbsp;<EditInfoModals page={props.page} data={item}/></td>
                </tr>
            )))
        }
        else {
            return (data.map((item, index) => (
                <tr key={index}>

                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.qualification}</td>
                    <td><RemoveModals email={item.email} page={props.page} />&nbsp;&nbsp;<MoreInfo data={item} amount={item.salary} page={props.page} />&nbsp;&nbsp;<EditInfoModals page={props.page} data={item}/></td>
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
                                {/* {datafilt()} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainTable;
