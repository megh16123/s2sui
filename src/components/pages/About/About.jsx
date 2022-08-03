import React from 'react'
import styles from './About.module.scss'
// import Image from 'next/image'
import Navbar from '../../LayoutComponents/Navbar'
import Footer from '../../LayoutComponents/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function About() {
  // const svg= <HTMLElement><svg className={styles.svg} viewBox="0 0 500 150" preserveAspectRatio="none" ><path className={styles.path} d="M251.92,-17.26 C209.59,70.55 285.77,81.41 251.92,151.48 L500.00,150.00 L500.00,0.00 Z" ></path></svg></HTMLElement>;
  const [width, setWidth] = React.useState(0);
  // const [svg, showSvg] = React.useState(false);
  // React.useEffect(() => {
  //   setWidth(window.innerWidth);
  // });
  // if(width>768){
  //   showSvg(true);
  // }

  return (
    <>
      <div className={styles.about_component}>

        <div className={styles.about}>
          <Navbar />
          <div className={styles.about_components_parent}>
            <div className={styles.left_component} data-aos="fade-left" data-aos-delay="250">
              <h1>About <br /> Us</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti esse accusantium. Natus enim maxime itaque unde tenetur, dolorem facere?</p>

            </div>
            <div className={styles.right_component} data-aos="fade-right" data-aos-delay="250">
              <img className={styles.lightbulb} src="/logo.png" alt="lightBulb"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.founder} data-aos="zoom-in">
        <svg className={styles.svg} viewBox="0 0 500 150" preserveAspectRatio="none" ><path className={styles.path} d="M251.92,-17.26 C209.59,70.55 285.77,81.41 251.92,151.48 L500.00,150.00 L500.00,0.00 Z" ></path></svg>
        <div className={styles.founder_text}>
          <h1>Our Founder</h1>
        </div>
        <div className={styles.founder_content}>
          <div className={styles.left_container}>
            <img className={styles.lightbulb} src="/logo.png" alt="lightBulb"></img>
          </div>
          <div className={styles.right_container}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt repellat explicabo culpa labore consectetur odio, totam aliquid? Quod at magnam alias reprehenderit sequi magni, voluptatibus aliquam nobis autem ullam suscipit commodi explicabo velit placeat amet ab, optio dicta. Corrupti aliquam quis voluptate explicabo incidunt?
          </div>
        </div>
      </div>

      <div className={styles.our_aim} data-aos="fade-up">
        <div className={styles.heading}>
          <h2>Our Aim</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi accusamus veritatis itaque labore repellat dolores nihil quidem at perspiciatis, ad earum ratione dolor unde et praesentium velit numquam corporis libero. Consectetur eum debitis quos doloribus necessitatibus quaerat ipsam dolor, hic quis aliquid esse, earum ab sint inventore? Perferendis corporis numquam consequuntur quasi quod iusto tempore exercitationem, facilis quo eos nam in laborum dicta necessitatibus autem unde quaerat suscipit sunt distinctio doloremque itaque aut, molestiae iste alias. Saepe illum iure eum ex odio corrupti nihil! Dolore, iste. Facere at provident nam molestiae? Praesentium ad adipisci tempore molestias quisquam illo recusandae.</p>
      </div>
      <Footer />
    </>
  )
}

export default About