import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function RemoveStudent({email}) {
    // For Modal 1
    const [show, setShow] = useState(false);
    const [student,setStudent] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // For Modal 2
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.post('http://localhost:3001/student/getbymail',{email:email});
                setStudent(result.data);
            } catch (error) {
                setStudent({});
            }
        };
    
        fetchData();
    }, [email]);

    const handleRemove = async () => {
        try {
            const result = await axios.post('http://localhost:3001/student/deleteadmin',{email:email});
            if(result.status === 200){
            handleShow2();
            handleClose();
            }
        } catch (error) {
           handleClose();
        }
    }

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
             {/* Name : {student.name} */}
          <br />
          Email : {student.email}
          <br />
          Fee Due : {student.feeDue}
                    <br /><br />
                    <span className="caution-message">NOTE: Once you remove the student, all the information of the student
                        will be deleted the database
                    </span>        
                </Modal.Body>
                <Modal.Footer>
                Do you want to remove &lt;{student.name} &gt; ? 
                    <Button variant="outline-dark" onClick={handleClose}>
                        No
                    </Button>
                    <Button
                        variant="dark"
                        onClick={() => {
                          handleRemove();
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
                &lt; {student.name} &gt; has been removed
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
