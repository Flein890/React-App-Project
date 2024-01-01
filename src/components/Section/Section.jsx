import React from 'react'
import { ContainerStyles, SectionSyles } from './SectionStyles'
import Move from '../../assets/video/Move.mp4'
import Button from '../UI/Button'

function Section() {
  return (<SectionSyles>
    <ContainerStyles>
        <h2>Book more meetings, build more trust, and close <span>more sales</span> using PAPU</h2>
        <Button />
    </ContainerStyles>
   <video src={Move} autoPlay loop muted playsInline preload='auto'></video>
   </SectionSyles> 
  )
}

export default Section