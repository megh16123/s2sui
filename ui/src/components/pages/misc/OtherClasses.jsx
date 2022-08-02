import React, { useState } from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import './OtherClasses.scss'

const ClassButton = ({buttonText}) => {
    return (
        <Link className="classButton" to="/">{buttonText}</Link>
    )
}

const OtherClasses = () => {
    const [showModal, setShowModal] = useState(false);

    const displayModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <Modal title='Other Classes' buttonText='Other classes' showModal={showModal} displayModal={displayModal} closeModal={closeModal} cssClass="classes">
            {<>
            <div className='classButtonContainer'>
                <ClassButton buttonText="Computer classes" />
                <ClassButton buttonText="UPTET" />
                <ClassButton buttonText="CTET" />
            </div>
            </>
            }
        </Modal>
    )
}

export default OtherClasses