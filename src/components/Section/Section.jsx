import React from 'react'
import { ContainerStyles, SectionSyles } from './SectionStyles'
import Move from '../../assets/video/Move.mp4'
import Button from '../UI/Button'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Section() {

  useEffect(() => {
    window.sr= ScrollReveal();

    sr.reveal('.side-sub',{
      origin: 'left',
      distance: '400px',
      duration: 2000,
      opacity:0,
    })
    sr.reveal('.video',{
      origin: 'right',
      distance: '50px',
      duration: 2000,
      opacity:0,
    })
  })

 

  return (<SectionSyles>
    <ContainerStyles  id='section' >
        <h2 className='side-sub'>Book more meetings, build more trust, and close <span>more sales</span> using PAPPU</h2>
        <Link to={'/login'}>
          <Button />
        </Link>
    </ContainerStyles>
   <video className='video' src={Move} autoPlay loop muted playsInline preload='auto'></video>
   </SectionSyles> 
  )
}

export default Section