import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const EditInfoModals = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* Modal 1 */}
            <Button variant="dark" onClick={handleShow}>
                Edit info
                {console.log(props.data)}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {props.page === "student" && `Edit <STUDENT NAME>`}
                        {props.page === "teacher" && `Edit <TEACHER NAME>`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form action="" method="post">
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="name"
                                placeholder="Name"
                                autoFocus
                            // onChange={onInputChange}

                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="sample@gmail.com"
                            // onChange={onInputChange}


                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-2"
                        >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                name="phone"
                                type="string"
                                placeholder="Phone Number"
                            // onChange={onInputChange}


                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-2"            >
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                name="address"
                                type="string"
                                as="textarea"
                                row={3}
                                placeholder='Address'
                            // onChange={onInputChange}


                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-2"            >
                            <Form.Label>{`${props.page === "student" ? "Classes" : "Subject"}`}</Form.Label>
                            <Form.Control
                                name={`${props.page === "student" ? "classes" : "subject"}`}
                                type="string"
                                placeholder={`${props.page === "student" ? "Classes (Comma Seperated Values)" : "Subject"}`}
                            // onChange={onInputChange}


                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-2">
                            <Form.Label>{`${props.page === "student" ? "Fee" : "salary"}`}</Form.Label>
                            <Form.Control
                                name={`${props.page === "student" ? "Fee" : "salary"}`}
                                type="string"
                                placeholder={`${props.page === "student" ? "Fee" : "salary"}`}
                            // onChange={onInputChange}


                            />
                        </Form.Group>
                        <Form.Group
                            className={`mb-2 ${props.page === "student" ? "d-none" : " "}`}            >
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control
                                name="qualification"
                                type="string"
                                as="textarea"
                                row={3}
                                placeholder='Educational Qualification'
                            // onChange={onInputChange}


                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" type="submit">
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditInfoModals