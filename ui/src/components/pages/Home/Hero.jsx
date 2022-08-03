import React from 'react'
import styles from './Hero.module.scss'
import Navbar from '../../LayoutComponents/Navbar'
import Footer from '../../LayoutComponents/footer'
import { useRef,useState } from "react";
import MentorCard from './mentorCard';
import "../Home/MentorCard.scss"
import AOS from 'aos';
import Modal from '../misc/Modal'
import RegisterationForm from '../misc/RegisterationForm'
import 'aos/dist/aos.css';
AOS.init();

function Hero() {
  const courseSliderRef = useRef();
  const courseSliderRef2 = useRef();
  const scroll = (scrollOffset) => {
    if (courseSliderRef && courseSliderRef.current) {
      courseSliderRef.current.scrollLeft += scrollOffset;
    }
  }
  const scroll2 = (scrollOffset) => {
    if (courseSliderRef2 && courseSliderRef2.current) {
      courseSliderRef2.current.scrollLeft += scrollOffset;
    }
  }
  const buttonSlider = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
  const [showModal, setShowModal] = useState(false);
  const displayModal = () => {
    setShowModal(true);
}

const closeModal = () => {
    setShowModal(false);
}

  return (

    <div className={styles.home}>
      <Navbar />
      <section className={styles.hero_section}>
        <div className={styles.hero_content} >
          <h1 data-aos="fade-left" data-aos-delay="250" data-aos-duration="1250">Study 2 Success</h1>
          <h2 data-aos="fade-left" data-aos-delay="250" data-aos-duration="1250">For A Better Future</h2>
          <p data-aos="fade-left" data-aos-delay="250" data-aos-duration="1250">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ea nostrum soluta reiciendis illo dolorum inventore nesciunt enim omnis vitae, dolorem labore facilis voluptates deleniti velit. Accusamus inventore, repellat minima maxime culpa iure delectus ea tempore, dolor qui tempora architecto?</p>
          <div className={styles.buttons}>
            {/* <button className={styles.button_default} showModal={showModal} displayModal={displayModal} closeModal={closeModal} cssClass="contactForm">
              Enroll Now
            </button> */}
             <Modal title='Get in touch' buttonText='Enroll Now' cssClass="Enroll" showModal={showModal} displayModal={displayModal} closeModal={closeModal}>{<RegisterationForm />}</Modal>
            {/* <button className={styles.button_second}>
              Learn More
            </button> */}
          </div>
        </div>
        <div className={styles.hero_img} data-aos="fade-right" data-aos-delay="250" data-aos-duration="1250">
          <img src="/main.png" alt="about-girl"></img>
        </div>
      </section>


      <div className={styles.just_for_margin}>
      </div>
      <section data-aos="fade-up" data-aos-delay="250" data-aos-duration="1250" className={styles.hero_section} id={styles.section2} style={{ flexDirection: 'row-reverse', height: '110vh' }}>
        <div className={styles.hero_content}>
          <h1 className={styles.section2heading}>Our Platform is Crafted Specificaly for students</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ea nostrum soluta reiciendis illo dolorum inventore nesciunt enim omnis vitae, dolorem labore facilis voluptates deleniti velit. Accusamus inventore, repellat minima maxime culpa iure delectus ea tempore, dolor qui tempora architecto?</p>
          <div className={styles.buttons}>
            {/* <button className={styles.button_default}>
              Get Started
            </button> */}
          </div>
        </div>
        <div className={styles.hero_img}>
          <img src="/main-2.png" alt="about-girl"></img>
        </div>
      </section>
      <section data-aos="fade-up" data-aos-delay="250" data-aos-duration="1250" className={styles.four}>
        <div className={styles.stats} id={styles.stats}>
          <div className={styles.card_icon}></div>
          <h2>10,000+</h2>
          <p>Students</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.card_icon}></div>
          <h2>1,000+</h2>
          <p>Learning Courses</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.card_icon}></div>
          <h2>9,000+</h2>
          <p>Materials</p>
        </div>
      </section>

      <section className={styles.fifth} data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1250">
        <h2>Our Platform is Crafted Specificaly for students</h2>
        <div style={buttonSlider}>
          <div className={styles.pagination_button_container}>
            <button
              onClick={() => scroll2(-250)}>

              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 1L1 9L9 17'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className={styles.card_container} ref={courseSliderRef2}>
            <div className={styles.card}>
              <img src="https://www.livelaw.in/h-upload/2021/09/14/400572-4pune-jee-main-results-decla-1599551417.jpg" alt="" />
              <h3>JEE Main course for beginner 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia deleniti sequi culpa exercitationem cumque, explicabo sed! Sapiente, debitis ea?</p>
            </div>
            <div className={styles.card}>
              <img src="https://www.livelaw.in/h-upload/2021/09/14/400572-4pune-jee-main-results-decla-1599551417.jpg" alt="" />
              <h3>JEE Main course for beginner 2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia deleniti sequi culpa exercitationem cumque, explicabo sed! Sapiente, debitis ea?</p>
            </div>
            <div className={styles.card}>
              <img src="https://www.livelaw.in/h-upload/2021/09/14/400572-4pune-jee-main-results-decla-1599551417.jpg" alt="" />
              <h3>JEE Main course for beginner 3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia deleniti sequi culpa exercitationem cumque, explicabo sed! Sapiente, debitis ea?</p>
            </div>
            <div className={styles.card}>
              <img src="https://www.livelaw.in/h-upload/2021/09/14/400572-4pune-jee-main-results-decla-1599551417.jpg" alt="" />
              <h3>JEE Main course for beginner 4</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia deleniti sequi culpa exercitationem cumque, explicabo sed! Sapiente, debitis ea?</p>
            </div>
          </div>
          <div className={styles.pagination_button_container}>
            <button
              onClick={() => scroll2(250)}>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 17L9 9L1 0.999998'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.sixth}  data-aos="zoom-out" data-aos-delay="250" data-aos-duration="1250">
        <h2>Our Professional Mentors</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Enim vitae nemo nihil ullam doloremque ex!</p>
        <div style={buttonSlider}>
          <div className={styles.pagination_button_container}>
            <button
              onClick={() => scroll(-250)}>

              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 1L1 9L9 17'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className={styles.mentors_component} ref={courseSliderRef}>
            
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
          </div>
          <div className={styles.pagination_button_container}>
            <button
              onClick={() => scroll(250)}>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 17L9 9L1 0.999998'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* <section className={styles.seventh}>
          <div className={styles.upper_div}>
            <div className={styles.left}>
              Are You Ready To Start Your Course Now
            </div>
            <div className={styles.right}>
              <div className={styles.contact_now}>
                Contact Us
              </div>
            </div>
          </div> */}
      <Footer />
      {/* </section> */}
    </div>
  )
}

export default Hero
