import React from 'react'
import PaperBg from '../../assets/PaperBg.jpg'
import './Achievements.css';

const AchievementCardData=[
    {
      Id:1,
      Image:'./achieve1.svg',
      Title:'4,850 Kg+',
      SubText:'Waste Collected and Disposed'
    },
    {
      Id:2,
      Image:'./achieve2.svg',
      Title:'99.99%',
      SubText:'Our Company is Successful'
    },
    {
      Id:3,
      Image:'./achieve4.svg',
      Title:'20,660+',
      SubText:'Satisfied and Happy Customers'
    }
]

const AchievementCard=({Image,Title,SubText})=>{
  return <div className='tictrashtoe-achievement-card'>
    <div className='tictrashtoe-achievement-card-img-container'>
    <img src={Image} className='tictrashtoe-achievement-card-img'></img>
    </div>
    <div className='tictrashtoe-achievement-card-content'>
    <div className='tictrashtoe-achievement-card_title'>{Title}</div>
    <div className='tictrashtoe-achievement-card_subtext'>{SubText}</div>
    </div>
  </div>
}

const Achievements = () => {
  return (
    <div className='tictrashtoe-achievements'>
    <img src={PaperBg} className='tictrashtoe-achievements-background_img'></img>
      <div className='tictrashtoe-achievements-content'>
        <div className='tictrashtoe-achievements-content-why'>Why Choose Us?</div>
        <div className='tictrashtoe-achievements-content-title'>We Make Sure Your Waste Goes to The Right Place</div>
        <div className='tictrashtoe-achievements-content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, neque? Vitae ipsum fugiat minus blanditiis beatae, est adipisci earum enim, deleniti, totam quas ex! Autem minus maxime atque corrupti enim aperiam, alias explicabo, id, doloremque tenetur voluptas debitis soluta aliquid.</div>
      </div>
      <div className="tictrashtoe-achievements-cards">
        {AchievementCardData.map((card)=>{
          return <AchievementCard key={card.Id} Image={card.Image} Title={card.Title} SubText={card.SubText}/>
        })}
      </div>
    </div>
  )
}

export default Achievements
