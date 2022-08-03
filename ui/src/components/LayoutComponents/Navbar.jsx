import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Navbar() {
  const [showlinks,setShowLinks]=useState(false);
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  },[]);

  const navigate = useNavigate();
  const redirectHome = () =>{
    navigate('/');
  }

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
            height: "105vh"
  }

  const notShow={
    display: "none",
    width: "100%"
  }
  const nothing={
    display:"flex"
  }
 
  return (
    <navbar className={styles.navbar} data-aos="fade-down" data-aos-delay="250">
        <div className={styles.logo} onClick={redirectHome}>
            <img src="/logo.png" alt="logo" width={70} height={70}></img>
        </div>
        <ul className={styles.navlinks} style={width<=768?showlinks?show:notShow:nothing}>
        <li className= {styles.navigationLinks}><NavLink to='/'>Home</NavLink></li>
        <li className= {styles.navigationLinks}><NavLink to='/classes'>Classes</NavLink> </li>
        <li className= {styles.navigationLinks}><NavLink to='/about'>About Us</NavLink></li>
        <li className= {styles.navigationLinks}><HashLink smooth to='#footer'>Contact Us</HashLink></li>
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