import React,{useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FiAlignCenter } from "react-icons/fi";


const NavWindow=()=>{
  return (
    <div className='nav-window'>
        <div>Home</div>
        <div>About Us</div>
        <div>Our Services</div>
        <div>Contact Us</div>
        <div><button className='navbar-signIn'>Register</button></div>
    </div>
  )
}

const NavToggleHandle=()=>{
  const [NavToggle,setNavToggle]=useState(false);

  const toggleNavBtn=()=>{
    setNavToggle(!NavToggle);
  }

  return [NavToggle,toggleNavBtn];
}

const MidNavBar=()=>{
  const [NavToggle,toggleNavBtn]=NavToggleHandle();

  return (
    <div className='navbar-middle-width-range'>
      {NavToggle?<RiCloseLine color='#ffff' onClick={toggleNavBtn} className='menutoggle'/>:<FiAlignCenter  color='#ffff' onClick={toggleNavBtn} className='menutoggle'/>}
      {(window.innerWidth>414)&&(window.innerWidth<1100)&&(NavToggle)&&(
        <div className='nav-window'>
        <div>Home</div>
        <div>About Us</div>
        <div>Our Services</div>
        <div>Contact Us</div>
      </div>
      )}
      <button className='navbar-signIn'>Register</button>
    </div>
    
  )
}

const NavList=()=>{
  return (
    <ul className='navbar-items'>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Contact Us</li>
        <li><button className='navbar-signIn'>Register</button></li>
    </ul>
  )
}

const ToggleNavbar=()=>{

  const [NavToggle,toggleNavBtn]=NavToggleHandle();  

  return (
    <div  className='navbar-menu-toggle'>
      {NavToggle?<RiCloseLine color='#ffff' onClick={toggleNavBtn} className='menutoggle'/>:<FiAlignCenter  color='#ffff' onClick={toggleNavBtn} className='menutoggle'/>}
      {(window.innerWidth<414)&&(NavToggle)&&(
        <NavWindow/>
      )}
    </div>
  )
}



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo-title'>
        <h1>TicTrashToe</h1>
        <img src={Logo} className='navbar-logo'/>
      </div>
      <NavList/>
      <MidNavBar/>
      <ToggleNavbar/>
    </div>
  )
}

export default Navbar
