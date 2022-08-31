import React from 'react'
import styles from './Hero.module.scss'
import Navbar from '../../LayoutComponents/Navbar'
import Footer from '../../LayoutComponents/footer'
import { useRef,useState } from "react";
import MentorCard from './mentorCard';
import "../Home/MentorCard.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
// import '../../LayoutComponents/aos.css';
import Modal from '../misc/Modal';
import RegisterationForm from '../misc/RegisterationForm'
import CountUp, { useCountUp } from "react-countup";
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
useCountUp({
  ref: "counter",
  end: 100,
  enableScrollSpy: true,
  scrollSpyDelay: 1000,
  scrollSpyOnce: true
});
useCountUp({
  ref: "counter2",
  end: 50,
  enableScrollSpy: true,
  scrollSpyDelay: 1000,
  scrollSpyOnce: true
});
  return (
    

    <div className={styles.home}>
      <Navbar />
      <section className={styles.hero_section}>
        <div className={styles.hero_content} >
          <h1 data-aos="fade-left" data-aos-delay="250" data-aos-duration="1250">Study 2 Success</h1>
          <h2 data-aos="fade-left" data-aos-delay="250" data-aos-duration="1250">For A Better Future</h2>
          <p data-aos="fade-left" data-aos-delay="250" data-aos-duration="1250">Your future is important, our goal is to put together the perfect plan for your student. We offer you the knowledge and skills by experienced professionals.</p>
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
        <div className={styles.hero_img}>
          <img  data-aos="fade-right" data-aos-delay="250" data-aos-duration="1250" src="/main.png" alt="about-girl"></img>
        </div>
      </section>


      <div className={styles.just_for_margin}>
      </div>
      <section data-aos="fade-up" className={styles.hero_section} id={styles.section2} style={{ flexDirection: 'row-reverse', height: '110vh' }}>
        <div className={styles.hero_content}>
          <h1 className={styles.section2heading}>Our Platform is Crafted Specificaly for students</h1>
          <h3>Why Choose Us</h3>
          <p className={styles.why_us}>
            <ul>
       <li>  <span className={styles.heading}> 1. Affordability:</span> We offer an excellent education in a very affordable price. </li>

        <li> <span className={styles.heading}>2. Best Faculty : </span> Mastered degree teachers for your  best results. </li>
        <li> <span className={styles.heading}> 3. </span>Very disciplined environment.  </li>

<li><span className={styles.heading}>4. </span> Smart class facilities are provided. </li>

<li><span className={styles.heading}>5.</span>  Well maintained classrooms, proper cleanliness, ventilated building along with facilities like A.C., lights, benches, chairs, whiteboard and fans. </li>

<li><span className={styles.heading}>6. </span> Our building place with located in a very quiet and calm place with a soothing ambience to concentrate better. for the students.</li>
</ul>
          </p>
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
      <section data-aos="fade-up" className={styles.four}>
        <div className={styles.stats} id={styles.stats}>
          <div className={styles.card_icon}></div>
          <h2 className='counter'>
          {/* <CountUp end={100} enableScrollSpy /> */}
          <span id="counter" />
          <span>+</span>
          </h2>
          <p>Students</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.card_icon}></div>
          <h2 className='counter' >
          {/* <CountUp end={50} enableScrollSpy />
           */}
            <span id="counter2" />
          <span>+</span>
          </h2>
          <p>Learning Courses</p>
        </div>
        {/* <div className={styles.stats}>
          <div className={styles.card_icon}></div>
          <h2>9,000+</h2>
          <p>Materials</p>
        </div> */}
      </section>

      <section className={styles.fifth} data-aos="zoom-in">
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
              <h3>CTET</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia deleniti sequi culpa exercitationem cumque, explicabo sed! Sapiente, debitis ea?</p>
            </div>
            <div className={styles.card}>
              <img src="https://www.livelaw.in/h-upload/2021/09/14/400572-4pune-jee-main-results-decla-1599551417.jpg" alt="" />
              <h3>UPTET</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia deleniti sequi culpa exercitationem cumque, explicabo sed! Sapiente, debitis ea?</p>
            </div>
            <div className={styles.card}>
              <img src="https://www.livelaw.in/h-upload/2021/09/14/400572-4pune-jee-main-results-decla-1599551417.jpg" alt="" />
              <h3>Basic Competitive Exams</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia deleniti sequi culpa exercitationem cumque, explicabo sed! Sapiente, debitis ea?</p>
            </div>
            <div className={styles.card}>
              <img src="https://www.livelaw.in/h-upload/2021/09/14/400572-4pune-jee-main-results-decla-1599551417.jpg" alt="" />
              <h3>B.Sc. Chemistry Biology</h3>
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

      <section className={styles.sixth}  data-aos="zoom-out" data-aos-delay="200">
        <h2>Our Professional Mentors</h2>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Enim vitae nemo nihil ullam doloremque ex!</p> */}
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
            
            <MentorCard name={'Yogesh Chopra' }  qualification={'M.Phil ,M.Com ,PGDIBO, B.Ed ,B.LLB'}/>
            <MentorCard name={'Shivam Sharma' }  qualification={'M.Sc., B.Ed.'} />
            <MentorCard name={'Ankush Kumar' }   qualification={'M.Sc., B.Ed. ,CTET'}/>
            <MentorCard name={'Harsh' }/>
            <MentorCard name={'Pragya Sharma ' } qualification={'M. Sc.'}/>
            <MentorCard name={'Shashank Goyal' } qualification={'MCA, C, C++,Java ,Python'}/>
            
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
      <Footer />
    </div>
  )
}

export default Hero
