import React from 'react'
import styles from './footer.module.scss'

function footer() {
  return (
      
    <section className={styles.seventh}>
    <div className={styles.upper_div}>
      <div className={styles.left}>
        Are You Ready To Start Your Course Now
      </div>
      <div className={styles.right}>
        <div className={styles.contact_now}>
          Contact Us
        </div>
      </div>
    </div>

    <footer className={styles.footer}>
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
  )
}

export default footer