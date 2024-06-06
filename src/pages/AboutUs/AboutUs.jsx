import React,{useState} from 'react';
import './AboutUs.css';
import CollegeGuys from '../../assets/collegeguys.jpg';
import CollegeGuysSmallScreen from '../../assets/collegeguys_small.jpg';

const ServiceData=[
  {
    Id:1,
    Name:'EcoScan',
    Img:'./ecoscan.png',
    desc:'Identify your trash and get eco-friendly disposal tips instantly. Make sustainable choices with ease!'
  },
  {
    Id:2,
    Name:'LeaderBoard',
    Img:'./Leader.png',
    desc:'Earn green points by correctly disposing of waste. Compete with friends and lead the way to a sustainable future!'
  },
  {
    Id:3,
    Name:'TrashConnect',
    Img:'./contact.jpg',
    desc:'Identify your waste and connect with local disposal services effortlessly. Contribute to a cleaner environment with ease!'
  }
]

const Service=({ServiceItem})=>{

  const [SeeService,setSeeService]=useState(false); 


  return (
    <div className='tictrashtoe_aboutus-service_card'
      onMouseEnter={()=>{
        setSeeService(true)
      }}
      onMouseLeave={()=>{
        setSeeService(false)
      }}
    >
    {
      SeeService? 
      <div className='tictrashtoe_aboutus-service_card-detail'><div className='tictrashtoe_aboutus-service_card-title'>{ServiceItem.Name}</div>
      <div className='tictrashtoe_aboutus-service_card-desc'>{ServiceItem.desc}</div>
      </div>
      : 
      <img  src={ServiceItem.Img} className='tictrashtoe_aboutus-service_card-img'></img>
    }
    </div>
  )
}


const AboutUs = () => {


  const [WindowSize,setWindowSize]=useState(window.innerWidth);

  window.addEventListener('resize',()=>{
    setWindowSize(window.innerWidth);
  })
  

  return (
    <div className='aboutus'>
        <div className='aboutus-titleContainer'>
            <h1>What we Offer.....</h1>
            <div>A List of Services that we provide for our customers</div>
        </div>
        <div className='aboutus-services'>
          {ServiceData.map((ServiceProvided)=>{
            return <Service key={ServiceProvided.Id} ServiceItem={ServiceProvided}></Service>
          })}
        </div>
        <div className="aboutus-history">
          {(WindowSize<920)?<div className='aboutus-hostory-img-container-smallscreen'>
            <img src={CollegeGuysSmallScreen} className='aboutus-history-img-small'></img>
            <div className='aboutus-history-small-textOverlay'>
              
              <h1 className='aboutus-history-small-title'>How We Started?..</h1>
              
              <p>Our waste disposal service began as a project by a group of environmentally-conscious college students who noticed the excessive waste on our campus and in our community. Driven by our passion for sustainability, we combined our diverse skills in environmental science, business, and engineering to create an efficient, eco-friendly waste management solution.</p></div>
          </div>:<div className='aboutus-history-bigscreen'>
          <div className='aboutus-history-img-container'>
            <img src={CollegeGuys} alt="" className='aboutus-history-img'/>
          </div>
          <div className='aboutus-history-content'>
            <div className="aboutus-history-content-title">
              How We Started?..
            </div>
            <div className="aboutus-history-content-text">
            Our waste disposal service began as a project by a group of environmentally-conscious college students who noticed the excessive waste on our campus and in our community. Driven by our passion for sustainability, we combined our diverse skills in environmental science, business, and engineering to create an efficient, eco-friendly waste management solution.
            </div>
          </div>
          </div>}
          
        </div>
    </div>
  )
}

export default AboutUs
