import React from 'react'
import './Home.css';
import trash_collect from '../../assets/trash_collect_nobg.png';
import cityBg from '../../assets/cityBackground.png';
import trashchillguy from '../../assets/trashchillguy.png';
import trashcan from '../../assets/trashCan.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Logo from '../../assets/Logo_Green.png';
import '../../components/Navbar/Navbar.css';



const Home = () => {
  return <>
    <Navbar/>
    <div className='home-title-page'>
      <div className="home-title-content-container">
        <div className='home-title-intro-content'><span className='home-title-intro-content-heading'>Reliable and Affordable Waste Services</span>Efficent Solutions, Right At Your Doorstep</div>
      </div>
      <img src={cityBg} className='home-title-content-cityBg-Img'></img>
      <img className='home-title-content-trashCollect-Img' src={trash_collect}></img>
      <img src={trashchillguy} className='home-title-content-trashchillguy'></img>
      <img src={trashcan} className='home-title-content-trashcan'></img>
      <div className='tictrashtoe-home-logo-container'>
        <img className='tictrashtoe-home-logo' src={Logo}></img>
      </div>
    </div>
    </>
}

export default Home
