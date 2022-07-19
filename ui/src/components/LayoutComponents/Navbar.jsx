import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'
import { HashLink } from 'react-router-hash-link';

// import Image from 'next/image'
function Navbar() {
  const [showlinks,setShowLinks]=useState(false);
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  const whiteBurger={
    backgroundColor:"white"
  }
  const blackBurger={
    backgroundColor:"black"
  }
  const show={
            display: "flex",
            height: "400px",
            flexDirection: "column",
            backgroundColor: "#2bb5b2",
            width: "100%",
            top: "0%",
            position:"fixed",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: "100",
            height: "100vh"
  }
  const notShow={
    display: "none",
    width: "100%"
  }
  const nothing={
    display:"flex"
  }
  
  return (
    <navbar className={styles.navbar} >
        <div className={styles.logo}>
            <img src="/logo.png" alt="logo" width={70} height={70}></img>
        </div>
        <ul className={styles.navlinks} style={width<1024?showlinks?show:notShow:nothing}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink> </li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><HashLink smooth to='#footer'>Contact Us</HashLink></li>
        </ul>
        <div className={styles.burger} onClick={()=>setShowLinks(!showlinks)}>
          <div className={styles.line} style={showlinks?whiteBurger:blackBurger}></div>
          <div className={styles.line} style={showlinks?whiteBurger:blackBurger}></div>
          <div className={styles.line} style={showlinks?whiteBurger:blackBurger}></div>
        </div>
    </navbar>
  )
}

export default Navbar