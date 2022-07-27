import React, { useState } from 'react'
import Footer from '../../LayoutComponents/footer'
import Navbar from '../../LayoutComponents/Navbar'
// import ContactFrom from '../misc/ContactFrom'
import Modal from '../misc/Modal'
import RegisterationForm from '../misc/RegisterationForm'
import './Classes.scss'

const Classes = () => {
    const [showModal, setShowModal] = useState(false);

    const displayModal = () => {
        setShowModal(true);

    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <Navbar />
            <div className="heroContainer">
                <div id="hero" />
                <div className="heroContent">
                    <h1>Classes</h1>
                    <div className="heroPara">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quo quod error perferendis ratione possimus natus eveniet nobis ullam eum voluptate deleniti ad animi minus!</p>
                    </div>
                    <Modal title='Get in touch' buttonText='Register' showModal={showModal} displayModal={displayModal} closeModal={closeModal}>{<RegisterationForm />}</Modal>
                </div>
            </div>

            <div id="cards">
                <div onClick={displayModal} className="card card-1">NEET/JEE</div>
                <div onClick={displayModal} className="card card-2">Class 12th</div>
                <div onClick={displayModal} className="card card-3">Class 11th</div>
                <div onClick={displayModal} className="card card-4">Class 10th</div>
                <div onClick={displayModal} className="card card-5">Class 2 - 9th</div>
            </div>
            <Footer />
        </>
    )
}

export default Classes


