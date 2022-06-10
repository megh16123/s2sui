import React,{useState} from 'react'
import styles from './Navbar.module.scss'
import Image from 'next/image'
function Navbar() {
  const [showlinks,setShowLinks]=useState(false);
  // const show=`{showlinks ? "show": "notshow"}`;
  const show={
            display: "flex",
            height: "400px",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.860)",
            width: "100%",
            top: "38%",
            position:"absolute",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: "100",
            height: "100vh"
  }
  const notShow={
    display: "none",
    width: "100%"
  }
  return (
    <navbar className={styles.navbar} >
        <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width="50" height="50"></Image>
        </div>
        <ul className={styles.navlinks} style={showlinks? show : notShow}>
        <li>Home</li>
        <li>Classes</li>
        <li>About Us</li>
        <li>Contact Us</li>
        </ul>
        <div className={styles.burger} onClick={()=>setShowLinks(!showlinks)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
    </navbar>
  )
}

export default Navbar