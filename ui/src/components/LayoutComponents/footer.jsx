import React, { useState } from 'react'
import Modal from '../pages/misc/Modal'
import ContactFrom from '../pages/misc/ContactFrom';
import styles from './footer.module.scss'
import { useLocation } from "react-router-dom"
import { useMediaQuery } from '../Misc/MediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Footer() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const isTablet = useMediaQuery('(min-width:727px) and (max-width: 768px)');
    const isMobile = useMediaQuery('(min-width:426px) and (max-width: 727px)');
    const isMobileSmaller = useMediaQuery('(max-width: 426px)');

    const classesStyleTablet = location.pathname === "/classes" && isTablet;
    const classesStyleMobile = location.pathname === "/classes" && isMobile;
    const classesStyleMobileSmaller = location.pathname === "/classes" && isMobileSmaller;

    const displayModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const style = {
        marginTop: "calc(45% + 10vw)",
    }
    const styleMobile = {
        marginTop: "calc(45% + 35vw)",
    }
    const styleMobileSmaller = {
        marginTop: "calc(45% + 5vw)",
    }

    return (
        <>
            <section  className={styles.seventh} style={classesStyleTablet ? style : classesStyleMobile ? styleMobile : classesStyleMobileSmaller ? styleMobileSmaller : console.log("false")}>
                {/* <hr /> */}
                <div id="footer" className={styles.upper_div}>
                    <div className={styles.left}>
                        Are You Ready To Start Your Course Now
                    </div>
                    <div className={styles.right}>
                        <Modal title='Contact Us' buttonText='Contact Us' showModal={showModal} displayModal={displayModal} closeModal={closeModal} cssClass="contactForm">{<ContactFrom closeModal={closeModal} />}</Modal>
                    </div>
                </div>

                <footer className={styles.footer} data-aos="fade-up">
                    <div className={styles.products}>
                        <h2>Products</h2>
                        <ul>
                            <li>Online Tutor</li>
                            <li>Private Teacher</li>
                            <li>E Books</li>
                            <li>premium E Course</li>
                            <li>Our Blogs</li>
                        </ul>
                    </div>
                    <div className={styles.information}>
                        <h2>Information</h2>
                        <ul>
                            <li>Online Tutor</li>
                            <li>Private Teacher</li>
                            <li>E Books</li>
                            <li>premium E Course</li>
                            <li>Our Blogs</li>
                        </ul>
                    </div>
                    <div className={styles.company}>
                        <h2>Company</h2>
                        <ul>
                            <li>Online Tutor</li>
                            <li>Private Teacher</li>
                            <li>E Books</li>
                            <li>premium E Course</li>
                            <li>Our Blogs</li>
                        </ul>
                    </div>
                    <div className={styles.getintouch}>
                        <h2>Get in touch</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero excepturi error delectus explicabo! Hic ea expedita animi id corporis quis quam repellendus, voluptatem fugiat, in quisquam perferendis est alias.</p>
                        <ul className={styles.icons}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </footer>

            </section>
        </>
    )
}

export default Footer
