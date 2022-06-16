import React from "react";
import MoreInfo from "../../MoreInfoModals";
import RemoveStudent from "../../RemoveStudentModals";

function MainTable(props) {
    const style = {
        backgroundColor: "#cccccc !important"
    };
    const [data,setData] = React.useState([]);
React.useEffect(() => {
const fetchData = async () => {
    const response = await fetch("http://localhost:3001/student/studentdata");
    const dat = await response.json();
    setData(dat);
}
fetchData();

}, [props.students]);
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
                              <tr key={-1}>
                                    <th scope="row"></th>
                                    <td>{null}</td>
                                    <td>{null}</td>
                                </tr>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{item._id}</td>
                                    <td>{item.classes.join(', ')}</td>
                                    <td><RemoveStudent email={item._id} />&nbsp;&nbsp;<MoreInfo email={item._id} classes={item.classes} fee={item.fee}/></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainTable;
