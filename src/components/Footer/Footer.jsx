import React from 'react'
import { FooterStyles } from './FooterStyles'

function Footer() {
  return (
    <FooterStyles>
      <div className='container'>
        <div className='footer-left'>
        <img src="" alt="logo" />
        <h3>Create Personalized videos at scale</h3>
        </div>
        <div className='footer-right'>
        <ul>
          <li><a href="">Chrome Extension</a></li>
          <li><a href="">FAQs</a></li>
          <li><a href="">Case Studies</a></li>
          <li><a href="">Roadmap</a></li>
          <li><a href="">Values</a></li>
          <li><a href="">Security</a></li>
        </ul>
        <ul>
          <li><a href="">Knowledge Base</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Afilliate Program</a></li>
          <li><a href="">Integrations</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Book a demo</a></li>
        </ul>
        </div>
        </div>
      <div className='support'>
        <span><a href="">Privacy Policy</a></span>
        <span><a href="">Terms</a></span>
        <span><a href="">franco.s.villanova@hotmail.com</a></span>
      </div>
    
    </FooterStyles>

  )
}

export default Footer