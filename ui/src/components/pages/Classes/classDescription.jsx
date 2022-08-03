import React from 'react'
import Footer from '../../LayoutComponents/footer'
import Navbar from '../../LayoutComponents/Navbar'
import './Classes.scss'
import PhoneComponent from './PhoneComponent'
import { useState } from 'react'
import { useMediaQuery } from '../../Misc/MediaQuery';
import MentorCard from '../Home/mentorCard'
import Modal from '../misc/Modal'
import RegisterationForm from '../misc/RegisterationForm'
import ParallaxSlider from './ParallaxSlider'
import { useParams } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function ClassDescription({Title,Description,Syllabus,SubjectName}) {
  const [showModal, setShowModal] = useState(false);

    const displayModal = () => {
        setShowModal(true);

    }
    let {cd}=useParams();
    const closeModal = () => {
        setShowModal(false);
    }
    
    const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
         <Navbar />
        <div className="description" >
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto voluptatibus maxime aspernatur numquam veniam, et ratione! Doloribus, corrupti sit explicabo quae placeat saepe accusamus maiores eligendi obcaecati neque alias. Incidunt doloremque odio dolorem aperiam facere. Suscipit delectus assumenda beatae, dolor eos excepturi dicta voluptas incidunt ea odit fugit eaque nihil inventore commodi laudantium explicabo doloribus labore nam expedita fuga libero. Nostrum ea, iste hic maxime qui quae omnis cumque quia voluptas at sint perferendis doloribus deleniti alias a quam veritatis necessitatibus soluta earum. Ullam, officia! Excepturi nulla consequatur tempore, eaque, eum eius in facilis totam molestiae vitae facere corrupti.</p>
            <Modal title='Get in touch' buttonText='Register' showModal={showModal} displayModal={displayModal} closeModal={closeModal} cssClass="Classes">{<RegisterationForm />}</Modal>
            <h2 className='syllabus' >Syllabus</h2>

        </div>
        
        {isMobile ? <PhoneComponent/> :<ParallaxSlider/>}
         
        <section className='mentorSlider'>
            <h2 className='mentor-heading'>Mentors Teaching</h2>
            <div className="mentors">        
          <div className="mentors_component" >            
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>   
        </div>
        </div>
        <Modal title='Get in touch' buttonText='Register' showModal={showModal} displayModal={displayModal} closeModal={closeModal} cssClass="Classes">{<RegisterationForm />}</Modal>
        </section>
        <Footer />
        </div>
        
  )
}

export default ClassDescription
