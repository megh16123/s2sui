import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './aos.css';
import styles from './Navbar.module.scss'
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
            width: "101%",
            top: "0%",
            position:"fixed",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: "100",
            height: "99.9vh"
  }

  const notShow={
    display: "none",
    width: "100%"
  }
  const nothing={
    display:"flex"
  }
 const fixed={
  position:"fixed"
 }
 const notfixed={
  position:"relative"
 }
  return (
    <navbar className={styles.navbar}>
        <div className={styles.logo} onClick={redirectHome}>
            <img src="/logo.png" alt="logo" width={70} height={70}></img>
        </div>
        <ul className={styles.navlinks} style={width<=768?showlinks?show:notShow:nothing}>
        <li className= {styles.navigationLinks}><NavLink to='/'>Home</NavLink></li>
        <li className= {styles.navigationLinks}><NavLink to='/classes'>Classes</NavLink> </li>
        <li className= {styles.navigationLinks}><HashLink to='#footer'>Contact Us</HashLink></li>
        <li className= {styles.navigationLinks}><NavLink to='/about'>About Us</NavLink></li>
        </ul>
        <div className={styles.burger} onClick={()=>setShowLinks(!showlinks)} style={showlinks?fixed:notfixed}>
          <div className={styles.line} style={showlinks?whiteBurger:blackBurger}></div>
          <div className={styles.line} style={showlinks?whiteBurger:blackBurger}></div>
          <div className={styles.line} style={showlinks?whiteBurger:blackBurger}></div>
        </div>
    </navbar>
  )
}

export default Navbar