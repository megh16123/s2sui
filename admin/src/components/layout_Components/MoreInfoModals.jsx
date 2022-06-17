import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function MoreInfo({email,classes,fee}) {
  // For Modal 1
  const [show, setShow] = useState(false);
  const [student,setStudent] = useState({});
  const [fees,setfee] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // For Modal 2
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // For Modal 3
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

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

  const markfee = async()=>{
    try {
      const result  = await axios.post('http://localhost:3001/student/updatefee',{email:email,fee:fees});
      if(result.status===200){
        let st = student;
        st.feepaid = result.data.fees;
        setStudent(st)
        handleShow3();
        handleClose2();
      }else{
        console.error(result.error);
      }
    } catch (error) {
      setfee(0);
    }
  }

  return (
    <>
      {/* Modal 1 */}
      <Button variant="dark" onClick={handleShow}>
        More Info
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>&lt;{student.name}&gt;</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Name : {student.name}
          <br />
          Email : {student.email}
          <br />
          Classes : {classes.join(', ')}
          <br />
          TotalFee: {fee}
          <br />
          Fee Due : {fee-student.feepaid}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              handleShow2();
              handleClose();
            }}
          >
            Mark Fee Submission
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
        <Modal.Header closeButton>
          <Modal.Title>Marking Fee Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter the amount paid :</Form.Label>
              <Form.Control
                type="number"
                required
                value={fees}
                onChange={(e)=>{
                  setfee(e.target.value)
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => {
              markfee();
            }}
          >
            Mark Fee Submission
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 3 */}

      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Fee Submission Marked</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Fee submission has been marked for &lt;{student.name}&gt;
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MoreInfo;
