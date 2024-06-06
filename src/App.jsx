import React from 'react'
import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Achievements from './components/Achievements/Achievements.jsx';
import Footer from './components/Footer/Footer.jsx'
import './App.css';

const App = () => {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Achievements/>
      <Footer/>
    </div>
  )
}

export default App
