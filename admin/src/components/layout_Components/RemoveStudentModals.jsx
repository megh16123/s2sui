import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RemoveStudent() {
    // For Modal 1
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // For Modal 2
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <>
            {/* Modal 1 */}
            <Button variant="dark" onClick={handleShow}>
                Remove Student 
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Remove a student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    SHOW STUDENT INFO HERE
                    <br /><br />
                    <span className="caution-message">NOTE: Once you remove the student, all the information of the student
                        will be deleted the database
                    </span>        
                </Modal.Body>
                <Modal.Footer>
                Do you want to remove &lt; name of student &gt; ? 
                    <Button variant="outline-dark" onClick={handleClose}>
                        No
                    </Button>
                    <Button
                        variant="dark"
                        onClick={() => {
                            handleShow2();
                            handleClose();
                        }}
                    >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Modal 2 */}

            <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Student Removed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                &lt; Name of student &gt; has been removed
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose2}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RemoveStudent;
