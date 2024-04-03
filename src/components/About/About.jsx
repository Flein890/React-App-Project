import React from 'react'
import video from '../../assets/video/Greet.mp4'
import Footer from '../Footer/Footer'
import { DataContainer,DataTitle,DataP,GridContainer,AboutStyles, InfoContainer,ColorSpan,AboutTitle,Video } from './AboutStyles'

function About() {
  return (
    <>
   <AboutStyles>
      <InfoContainer>
        <AboutTitle>Use PAPPU to <ColorSpan>add </ColorSpan> 
          <ColorSpan>personality</ColorSpan> to your outreach sequences</AboutTitle>
        <Video src={video} autoPlay muted loop playsInline preload='auto'></Video>
         <GridContainer>
            <DataContainer>
               <DataTitle>AI generated screen recordings</DataTitle>
               <DataP>Auto-generate screen recordings with personalized backgrounds</DataP>
            </DataContainer>
            <DataContainer>
               <DataTitle>Customize branding on video pages</DataTitle>
               <DataP>Customize video landing pages with your own branding & domain</DataP>
            </DataContainer>
            <DataContainer>
               <DataTitle>AI generated facecam videos</DataTitle>
               <DataP>Turn your facecam video into thousands of personalized videos</DataP>
            </DataContainer>
            <DataContainer>
               <DataTitle>Calendar embeds</DataTitle>
               <DataP>Embed calendar widgets right on your video page</DataP>
            </DataContainer>
            <DataContainer>
               <DataTitle>Custom themes</DataTitle>
               <DataP>Add stickers, emojis, gifs and images on video pages</DataP>
            </DataContainer>
            <DataContainer>
               <DataTitle>Secure and safe</DataTitle>
               <DataP>Potion AI platform is SOC2 Type I compliant</DataP>
            </DataContainer>
         </GridContainer>
      </InfoContainer>
   </AboutStyles>
   <Footer/>
   </>
  )
}

export default About
