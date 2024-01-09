import React from 'react'
import { ContainerStyles, SectionSyles } from './SectionStyles'
import Move from '../../assets/video/Move.mp4'
import Button from '../UI/Button'

function Section() {

  sr.reveal('.side-sub',{
    origin: 'left',
    distance: '400px',
    duration: 2000,
    opacity:0,
  })
  sr.reveal('.video',{
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    opacity:0,
  })

  return (<SectionSyles>
    <ContainerStyles>
        <h2 className='side-sub'>Book more meetings, build more trust, and close <span>more sales</span> using PAPU</h2>
        <Button />
    </ContainerStyles>
   <video className='video' src={Move} autoPlay loop muted playsInline preload='auto'></video>
   </SectionSyles> 
  )
}

export default Section