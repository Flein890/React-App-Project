import React from 'react'
import { HeroStyles, DownArrow } from './HeroStyles.js'
import Button from '../UI/Button.jsx'
import laptop from '../../assets/video/laptop.mp4'

function Hero() {

 window.sr=ScrollReveal(); 

  sr.reveal('.title',{
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    opacity:0,
    rotate:{
      x:30,
      y:0,
      z:0
    }
  })
  sr.reveal('.subtitle',{
    origin: 'bottom',
    distance: '90px',
    duration: 2000,
    delay:300,
    opacity:0,
    rotate:{
      x:30,
      y:0,
      z:0
    }
  })
  sr.reveal('.btn-hero',{
    origin: 'bottom',
    distance: '90px',
    duration: 2000,
    opacity:0,
    delay:500,
    rotate:{
      x:30,
      y:0,
      z:0
    }
  })

  return (
  <>
   <HeroStyles>
    <h1 className='title'>Personalized videos at scale</h1>
    <p className='subtitle'>Simplify video prospecting and boost response rates by up to 500% with impactful sales videos</p>
    <Button className='btn-hero'/>
    <DownArrow><img src="https://img.icons8.com/ios/50/000000/down.png" alt="down arrow" /></DownArrow>
    {/* <video src={laptop} autoPlay loop muted playsInline></video> */}
   </HeroStyles>
    
  </>
  
  )
}

export default Hero