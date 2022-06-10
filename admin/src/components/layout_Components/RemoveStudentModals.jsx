import React from "react";

function RemoveStudentModals() {
    return (
        <>
            <div className="modal fade" id="removeStudentModal" aria-hidden="true" aria-labelledby="removeStudentModalLabel"
                tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="removeStudentModalLabel">Remove a student</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            SHOW STUDENT INFO HERE
                            <br /><br />
                            <span className="caution-message">NOTE: Once you remove the student, all the information of the student
                                will be deleted the database
                            </span>
                        </div>
                        <div className="modal-footer">
                            Do you want to remove &lt; name of student &gt; ? <button className="btn btn-dark"
                                data-bs-target="#removeStudentModal2" data-bs-toggle="modal">Yes</button><button
                                    className="btn btn-light" data-bs-dismiss="modal" data-bs-toggle="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="removeStudentModal2" aria-hidden="true" aria-labelledby="removeStudentModalLabel2"
                tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="removeStudentModalLabel2">Student Removed</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            &lt; Name of student &gt; has been removed
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-dark" data-bs-dismiss="modal" data-bs-toggle="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RemoveStudentModals;