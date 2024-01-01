import React from 'react'
import { HeroStyles } from './HeroStyles.js'
import Button from '../UI/Button.jsx'
import laptop from '../../assets/video/laptop.mp4'

function Hero() {
  return (
  <>
   <HeroStyles>
    <h1>Personalized videos at scale</h1>
    <p>Simplify video prospecting and boost response rates by up to 500% with impactful sales videos</p>
    <Button/>
    {/* <video src={laptop} autoPlay loop muted playsInline></video> */}
   </HeroStyles>
   
    
  </>
  
  )
}

export default Hero