import React, { useState } from 'react'
import Footer from '../../LayoutComponents/footer'
import Navbar from '../../LayoutComponents/Navbar'
import Modal from '../misc/Modal'
import OtherClasses from '../misc/OtherClasses'
import RegisterationForm from '../misc/RegisterationForm'
import './Classes.scss'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
            <div className="heroContainer" data-aos="fade-right" data-aos-delay="50">
                <div id="hero" />
                <div className="heroContent">
                    <h1 className='animate__animated animate__bounce'>Classes</h1>
                    <div className="heroPara">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quo quod error perferendis ratione possimus natus eveniet nobis ullam eum voluptate deleniti ad animi minus!</p>
                    </div>
                    <Modal title='Get in touch' buttonText='Register' showModal={showModal} displayModal={displayModal} closeModal={closeModal}>{<RegisterationForm closeModal={closeModal} />}</Modal>
                </div>
            </div>

            <div id="cards">
                <Link to="./cd" className="card card-1" data-aos="fade-left"   data-aos-duration="1500">NEET/JEE</Link>
                <Link to="./cd" className="card card-2" data-aos="fade-left"  data-aos-duration="1500">Class 12th</Link>
                <Link to="./cd" className="card card-3" data-aos="fade-left"  data-aos-duration="1500">Class 11th</Link>
                <Link to="./cd" className="card card-4" data-aos="fade-left"  data-aos-duration="1500">Class 10th</Link>
                <Link to="./cd" className="card card-5" data-aos="fade-left"  data-aos-duration="1500">Class 2 - 9th</Link>
            </div>
            <OtherClasses/>
            <Footer />
        </>
    )
}

export default Classes


