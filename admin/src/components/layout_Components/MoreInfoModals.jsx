import React from "react";

function MoreInfo() {
    return (
        <>
         {/* More Info modals */}
            <div className="modal fade" id="more-info-modal" aria-hidden="true" aria-labelledby="more-info-modalLabel"
                tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="more-info-modalLabel">&lt;Student Name&gt;</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Show information of &lt;Student Name&gt; with the number of due fee months.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-dark" data-bs-target="#more-info-modal2" data-bs-toggle="modal">Mark Fee
                                Submission</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="more-info-modal2" aria-hidden="true" aria-labelledby="more-info-modalLabel2"
                tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="more-info-modalLabel2">Marking Fee Submission</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="col-form-label">Enter the number of months fee has been paid for (in
                                        numbers)</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Enter the total amount paid : </label>
                                    <input type="number" className="form-control" />
                                </div>
                            </form>
                            <button className="btn btn-dark" data-bs-target="#more-info-modal3" data-bs-toggle="modal">Mark
                                Fee Submission</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="more-info-modal3" aria-hidden="true" aria-labelledby="more-info-modalLabel2"
                tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="more-info-modalLabel2">Marked Fee Submission</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Fee submission has been marked for &lt;Student Name&gt;
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-dark" data-bs-dismiss="modal" data-bs-toggle="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>

    {/* End of modals */}
        </>
    )
}

export default MoreInfo;