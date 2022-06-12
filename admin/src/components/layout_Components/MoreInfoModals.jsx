import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";

function MoreInfo() {
  // For Modal 1
  const [show, setShow] = useState(false);

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
          <Modal.Title>&lt;Student Name&gt;</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Show information of &lt;Student Name&gt; with the number of due fee months.
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter the number of months fee has been paid for (in numbers)</Form.Label>
              <Form.Control
                type="number"
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter the total amount paid :</Form.Label>
              <Form.Control
                type="number"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => {
              handleShow3();
              handleClose2();
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
          Fee submission has been marked for &lt;Student Name&gt;
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
